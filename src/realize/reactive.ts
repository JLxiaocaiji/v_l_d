
export const reactive = <T extends object>(target: T) => {
    return new Proxy(target, {
        // 传入对象，属性，当前对象
        get(target, key, receiver) {
            // receiver 保证当前正确
            let res = Reflect.get(target, key, receiver)
            return res
        },
        set(target, key, value, receiver) {
            let res = Reflect.set(target, key, value, receiver)

            return res
        },
    })
}