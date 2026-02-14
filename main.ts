//% color=#FF8800 icon="\uf06e" block="GP2Y0A21YK"
namespace GP2Y0A21YK {

    //% block="GP2Y0A21YK 距離(cm) ピン %pin"
    export function distanceCm(pin: AnalogPin): number {

        // ① アナログ値を読む（0〜1023）
        let analog = pins.analogReadPin(pin)

        // ② アナログ値 → 電圧(V) に変換
        //    micro:bit の基準電圧は 3.3V
        let voltage = analog * 3.3 / 1023

        // ③ 電圧 → 距離(cm) に変換
        //    正しい式： distance = 27.86 / (voltage - 0.42)
        let distance = 27.86 / (voltage - 0.42)

        // ④ 異常値の処理（近すぎ・遠すぎ）
        if (distance < 10) distance = 10
        if (distance > 80) distance = 80

        return distance
    }
}