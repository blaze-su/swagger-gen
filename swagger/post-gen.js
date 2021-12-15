import del from "del"
import fs from 'fs'
import path from "path"
import _ from 'lodash' 

const SWAGGER_DIR = 'swagger/gen';
const MODEL_DIR = path.join(SWAGGER_DIR, "model");
const TYPE_DIR = 'src/types/model'

const removeUnusedFiles = async () => {
    console.log('[api:post] remove unused files...' )

    const deletedFils = await del(
    [
        `${SWAGGER_DIR}/**`,
        `${SWAGGER_DIR}/.**`,
        `!${MODEL_DIR}`,
        `!${MODEL_DIR}/**`,
    ]);

    console.log('[api:post]', deletedFils)

    console.log('[api:post] finished remove unused files success.' )
}

const fixFileImport = (data) => {
    const reg = /'\.\/(\w+)'/g; 
    return data.replace(reg, (template, match) => template.replace(match, _.kebabCase(match)))
}

const fixFileName = (fileName) => {
    const fileParts = fileName.split(".") 
    fileParts[0] = _.kebabCase(fileParts[0])
    return fileParts.join("."); 
}


const readModelFilesAsync = (modelPath) => {
    return new Promise((resolve, reject) => {
        fs.readdir(modelPath, (err, fileNames) => {
            if(!err) resolve(fileNames)
            
            reject(err)
        })
    })
}

const readFileAsync = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(!err) resolve(data)

            reject(err)
        })
    }) 
}

const writeFileAync = (filePath, fileData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, fileData, 'utf8', (err) => {
            if(!err) resolve()
            
            reject(err)
        })
    })
}

const renameFileAync = (filePath, newFilePath) => {
    return new Promise((resolve, reject) => {
        fs.rename(filePath, newFilePath, (err) => {
            if(!err) {
                resolve()
            }

            reject(err)
        })
    })
}

const postGen = async () => {
    removeUnusedFiles(); 

    const modelFiles = await readModelFilesAsync(MODEL_DIR); 

    const filePreparedPromises = modelFiles.map(async (fileName) => {
        const filePath = path.join(MODEL_DIR, fileName);

        const fileData = await readFileAsync(filePath).then(fixFileImport);

        await writeFileAync(filePath, fileData)

        const fixedFileName = fixFileName(fileName);
        const fixedFilePath = path.join(MODEL_DIR, fixedFileName);
        await renameFileAync(filePath, fixedFilePath)

        console.log(`[api:post] prepare ${fixedFileName}` )

        return fixedFileName;
    });

    Promise.all([...filePreparedPromises]).then((modelFiles) => {

        del.sync(`${TYPE_DIR}`);
        console.log(`[api:post] ${TYPE_DIR} was cleared` )

        fs.mkdirSync(TYPE_DIR);
                
        modelFiles.forEach((fileName) => {
            const filePath = path.join(MODEL_DIR, fileName);
            const typePath = path.join(TYPE_DIR, fileName); //?

            fs.copyFile(filePath, typePath, () => {
                console.log(`[api:post] copied ${fileName}`  )
            })
        })
   
    })

    return;
}

postGen()