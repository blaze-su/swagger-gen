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
import { PaymentSchedules1 } from './payment-schedules-1';
import { Period } from './period';


/**
 * Информация по предстоящим выплатам
 */
export interface PaymentSchedulesTable1 { 
    /**
     * Продукты, по которым предстоят выплаты
     */
    paymentSchedules1: Array<PaymentSchedules1>;
    /**
     * Период
     */
    period: Period;
}
