class Greeter(val name: String) {
    fun greet() {
        println("Greetings and Salutaions, $name")
    }
}

fun main(args: Array<String>) {
    Greeter(args[0]).greet()
}