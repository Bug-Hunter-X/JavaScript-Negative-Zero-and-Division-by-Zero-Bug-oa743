# JavaScript Negative Zero and Division by Zero Bug

This repository demonstrates a common JavaScript bug related to the handling of negative zero (-0) and division by zero. The bug arises from the loose comparison (==) and the behavior of division when one of the operands is zero or negative zero. The solution demonstrates proper handling of these cases using strict comparison (===) and explicitly checking for negative zero.

## Bug Description
The `foo` function incorrectly handles cases where either `a` or `b` is zero or negative zero.  It fails to distinguish between 0 and -0, and does not properly handle division by zero.

## Solution
The solution addresses this bug by using strict comparison to differentiate between 0 and -0, and includes explicit checks to prevent division by zero.