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
import { PaymentSchedule } from './payment-schedule';


/**
 * Выплаты по продукту
 */
export interface PaymentSchedules2 { 
    /**
     * Наименование актива
     */
    asset: string;
    /**
     * Выплаты
     */
    paymentSchedule2: Array<PaymentSchedule>;
}
