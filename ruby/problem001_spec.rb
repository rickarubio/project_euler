require './problem001.rb'

describe MathUtilities do
  describe '#find_sum_of_multiples' do
    it "returns the sum of all multiples specified below the max value" do
      expect(MathUtilities.find_sum_of_multiples(1000, 3, 5)).to eq 233168
    end
  end
end
