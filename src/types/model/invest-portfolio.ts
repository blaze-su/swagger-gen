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


export interface InvestPortfolio { 
    /**
     * Баланс клиента на дату окончания за период
     */
    balance: string;
    /**
     * Доход портфеля на дату окончания за период
     */
    income: number;
    /**
     * Доходность портфеля в процентах на дату окончания за период
     */
    incomePercent: number;
    /**
     * Наименования месяца или квартала
     */
    name: string;
    /**
     * Операции снятия/пополнения на дату окончания за период
     */
    operation?: string;
    /**
     * Год
     */
    year: string;
}
