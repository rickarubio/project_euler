# ProjectEuler.net - Problem 1 - Multiples of 3 and 5
=begin
If we list all the natural numbers below 10 that are multiples of 3 or 5, we
get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
=end

# Inputs: max value, multiples
# Output: sum of all the unique multiples specified below max-range

module MathUtilities
  def MathUtilities.find_sum_of_multiples(max_value, *multiples)
    values = []
    multiples.each do |multiple|
      for i in 1..max_value
        current_value = multiple * i
        values << current_value if current_value < max_value
      end
    end
    values.uniq.inject(:+)
  end
end
