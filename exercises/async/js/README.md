# Async JS exercises

## Exercise #1: Rotate forever

[exercise1.html](exercise1.html) contains a red box and a start button.
When the start button is clicked, the red box should start rotating and never stop.
Use the provided sleep function to implement start.
Try the following:
* Add class `around`
* `sleep` 3 seconds
* remove class `around`
* `sleep` 10ms
* repeat the above steps forever you can use a `while` loop.

![Exercise1](images/exercise1.png)

## Exercise #2: Stop rotating

Add a **stop** button to the solution from Exercise #1.
When clicked the box should stop rotating.
Can you make the box stop immediately, not after it finished a round?

*Hint: Raise an error by rejecting the promise to stop.*