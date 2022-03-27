require 'set'
require "test/unit/assertions"
include Test::Unit::Assertions


def find_alphabet_order(words)
  predecessors =  {}
  successor = {}

  pairs =  words.zip(words[1..]).select { |x, y| x && y }
  pairs.each do |first, second|
    f = first.split('')
    s = second.split('')
    char_pairs = f.zip(s).select { |x, y| x && y }

    char_pairs.each do |char1, char2|
      if char1 != char2
          successor[char1] = successor[char1] ? successor[char1].add(char2) : Set.new([char2])
          predecessors[char2] = predecessors[char2] ? predecessors[char2].add(char1) : Set.new([char1])
          break
      end
    end
  end

  chars = Set.new(words.map { |word| word.split('') }.flatten)
  charToProcess = (chars - Set.new(predecessors.keys)).to_a
  order = []

  while not charToProcess.empty?
    ch = charToProcess.pop()
    order << ch
    successor[ch].to_a.each do |char|
      predecessors[char].delete(ch)
      charToProcess << char if predecessors[char].empty? && !charToProcess.include?(char)
    end
  end
  order
end


def test_cases()
  puts("test run start")
  # test case 1
  alphabet = find_alphabet_order(['bca', 'aaa', 'acb'])
  assert_equal( alphabet, ['b', 'a', 'c'])

  # test case 2
  alphabet_2 = find_alphabet_order(['bca', 'cbb', 'aca', 'aab'])
  assert_equal( alphabet_2, ['b', 'c', 'a'])

  # test case 3
  alphabet_3 = find_alphabet_order(['baa', 'abcd', 'abca', 'cab', 'cad'])
  assert_equal( alphabet_3, ['b', 'd', 'a', 'c'])

  # test case 4
  alphabet_4 = find_alphabet_order(['caa', 'aaa', 'aab'])
  assert_equal( alphabet_4, ['c', 'a', 'b'])

  # test case 5
  alphabet_5 = find_alphabet_order(
      ['abc', 'ace', 'bbc', 'cde', 'cee', 'dee', 'eae'])
  assert_equal( alphabet_5, ['a', 'b', 'c', 'd', 'e'])

  # test case 6
  alphabet_6 = find_alphabet_order(['bdo', 'bdb', 'd'])
  assert_equal( alphabet_6, ['o', 'b', 'd'])

  # test case 7
  alphabet_7 = find_alphabet_order(['bghhi', 'bghih', 'gbi', 'hii'])
  assert_equal( alphabet_7, ['b', 'g', 'h', 'i'])

  puts("test run complted")
end


test_cases()
