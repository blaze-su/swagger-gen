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
import { PaymentSchedules } from './payment-schedules';
import { Period } from './period';


/**
 * Информация по предстоящим выплатам для отображения на фронте
 */
export interface PaymentSchedulesTable { 
    /**
     * Продукты, по которым предстоят выплаты
     */
    paymentSchedules: Array<PaymentSchedules>;
    /**
     * Период
     */
    period: Period;
}
