#7kyu
def smaller(arr):
    result = []
    for i in range(len(arr)):
        count = 0
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[i]:
                count += 1
        result.append(count)
    return result
import codewars_test as test
from solution import smaller

@test.describe("How many are smaller than me?")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0])
        test.assert_equals(smaller([1, 2, 3]), [0, 0, 0])
        test.assert_equals(smaller([1, 2, 0]), [1, 1, 0])
        test.assert_equals(smaller([1, 2, 1]), [0, 1, 0])
        test.assert_equals(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0])
        test.assert_equals(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0])



#8kyu
def to_alternating_case(string):
    return ''.join([char.lower() if char.isupper() else char.upper() for char in string])
import codewars_test as test
from solution import to_alternating_case

@test.describe("Basic tests")
def test_bacics():
    @test.it("should work for fixed tests (provided in the description)")
    def test_fixed():
        test.assert_equals(to_alternating_case("hello world"), "HELLO WORLD")
        test.assert_equals(to_alternating_case("HELLO WORLD"), "hello world")
        test.assert_equals(to_alternating_case("hello WORLD"), "HELLO world")
        test.assert_equals(to_alternating_case("HeLLo WoRLD"), "hEllO wOrld")
        test.assert_equals(to_alternating_case("12345"), "12345")
        test.assert_equals(to_alternating_case("1a2b3c4d5e"), "1A2B3C4D5E")
        test.assert_equals(to_alternating_case("String.prototype.toAlternatingCase"), "sTRING.PROTOTYPE.TOaLTERNATINGcASE")
        test.assert_equals(to_alternating_case(to_alternating_case("Hello World")), "Hello World")

