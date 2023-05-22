package main

import "fmt"

func main()  {

	var number int = 29
	age := 30
	var words string = "Let's GO"
	var secondWords = "Learn GO with Ninja Kevin"
	name := "Kevin"

	secondNumber := 19
	fmt.Println(words, secondWords, number, secondNumber)

	fmt.Printf("Learn GO's integer %v with %q \n", age, name)

	fmt.Printf("Get type of %T", age)
	
}