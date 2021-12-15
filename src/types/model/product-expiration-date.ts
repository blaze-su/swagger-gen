/**
 * ufr-invrep-core-api
 * Инвестиционный отчёт
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface ProductExpirationDate { 
    /**
     * Сумма продукта
     */
    amount: number;
    /**
     * Дата закрытия продукта
     */
    expirationDate: string;
    /**
     * Наименование продукта
     */
    name: string;
    /**
     * Процент продукта в портфеле
     */
    percent: number;
}