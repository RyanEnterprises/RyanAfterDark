fun foo() =
arrayOf(1, 2, 3).map { it * 2 }
args: [1, 2, 3]
uses: [kotlin.collections.map]
package test
external fun foo(): Array<Int>
external fun bar(x: Int): Int = definedExternally 
external fun bar(x: String): String = definedExternally
external fun bar(x: Array<Int>): Array<Int> = definedExternally
external fun bar(x: Array<String>): Array<String> = definedExternally
external fun bar(x: Array<Array<Int>>): Array<Array<Int>> = definedExternally
external fun bar(x: Array<Array<String>>): Array<Array<String>> = definedExternally
external fun bar(x: Array<Array<Array<Int>>>): Array<Array<Array<Int>>> = definedExternally
external fun bar(x: Array<Array<Array<String>>>): Array<Array<Array<String>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Int>>>>): Array<Array<Array<Array<Int>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<String>>>>): Array<Array<Array<Array<String>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Int>>>>>): Array<Array<Array<Array<Array<Int>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<String>>>>>): Array<Array<Array<Array<Array<String>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Int>>>>>>): Array<Array<Array<Array<Array<Array<Int>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<String>>>>>>): Array<Array<Array<Array<Array<Array<String>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Int>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<String>>>>>>>): Array<Array<Array<Array<Array<Array<Array<String>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Int>>>>>>>>>>>>>>>>> = definedExternally
external fun bar(x: Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>>>>>>>>): Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<Array<String>>>>>>>>>>>>>>>>> = definedExternally
java.lang.Class<*> get(x: Any): java.lang.Class<*> = definedExternally
java.args
*/
definedExternally
arrayOf
with (arrayOf(1, 2, 3)) {
    map { it * 2 }
}
/*
Kotlin call:
val result = arrayOf(1, 2, 3).map { it * 2 }
result: Array<Int>
*/
with (arrayOf(1, 2, 3)) {
    map { it * 2 }
}
/*
Kotlin call:
val result = arrayOf(1, 2, 3).map { it * 2 }
result: Array<Int>
*/
with (arrayOf(1, 2, 3)) {
    map { it * 2 }
}
java.args
package test
fun foo(): Array<Int> = definedExternally
fun bar(x: Int): Int = definedExternally
fun bar(x: String): String = definedExternally
fun bar(x: Array<Int>): Array<Int> = definedExternally
fun bar(x: Array<String>): Array<String> = definedExternally
fun bar(x: Array<Array<Int>>): Array<Array<Int>> = definedExternally
test.foo()
/*
Kotlin call:
val result = test.foo()
result: Array<Int>
*/
test.foo()
apun()
app.result
java.args
package test
fun foo(): Array<Int> = definedExternally
try {
    foo()
}
catch (e: Exception) {
    e.printStackTrace()
}
catch(Exception e) {
    
}
give
java.args
package test
fun foo(): Array<Int> = definedExternally
try {
    foo()
}
catch (e: Exception) {
    e.printStackTrace()
}
catch(Exception e) {
    
}
printStackTrace
out
java.args
package test
fun foo(): Array<Int> = definedExternally
try {
    foo()
}
catch (e: Exception) {
    e.printStackTrace()
}
catch(Exception e) {
    
}
out