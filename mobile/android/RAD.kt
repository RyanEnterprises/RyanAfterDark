import java.util.Arrays

fun main(args: Array<String>) {
    val array1 = intArrayOf(1, 2, 3)
    val array2 = intArrayOf(4, 5, 6)

    val aLen = array1.size
    val bLen = array2.size
    val result = IntArray(aLen + bLen)

    System.arraycopy(array1, 0, result, 0, aLen)
    System.arraycopy(array2, 0, result, aLen, bLen)

    println(Arrays.toString(result))
}

class Greeter(val name: String) {
    fun greet() {
        println("Greetings and Salutaions, $name")
    }
}

fun main(args: Array<String>) {
    Greeter(args[0]).greet()
}

val jake = Person()                                     // 1
val stringDescription = jake.apply {                    // 2
    name = "Ryan After Dark"                                       // 3
    age = 0
    about = "Basically the canary version of RyanWeb"
}.toString()                                            // 4