//% color=#2E8BFF icon="\uf2db" block="GP2Y0A21YK"
namespace GP2Y0A21YK {

    // GP2Y0A21YK の有効距離範囲
    const MIN_CM = 10
    const MAX_CM = 80

    //% block="GP2Y0A21YK 距離(cm) ピン %pin"
    export function distanceCm(pin: AnalogPin): number {
        const adc = pins.analogReadPin(pin)

        // アナログ値が小さすぎると計算不能
        if (adc <= 20) return -1

        // 近似式（逆比例）
        let cm = 4800 / (adc - 20)

        // 有効範囲外は -1
        if (cm < MIN_CM || cm > MAX_CM) return -1

        return cm
    }

    //% block="GP2Y0A21YK 生のアナログ値 ピン %pin"
    export function rawAnalog(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    //% block="GP2Y0A21YK 有効距離か？ ピン %pin"
    export function inRange(pin: AnalogPin): boolean {
        const d = distanceCm(pin)
        return d >= MIN_CM && d <= MAX_CM
    }
}
