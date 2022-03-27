require 'set'
require "test/unit/assertions"
include Test::Unit::Assertions


class Graph
  attr_reader :graph, :V

  def initialize(vertices)
    @graph = Hash.new([])
    @V = vertices
  end

  def add_edge(u, v)
    @graph[u].push v
  end

  def topological_sort_util(v, visited, stack)
    visited[v] = true
    @graph[v].each do |i|
      topological_sort_util(i, visited, stack) if not visited[i]
    end
    stack.insert(0, v)
  end

  def topological_sort
    visited = [false] * @V
    stack = []

    (0..(@V-1)).to_a.each do |i|
      topological_sort_util(i, visited, stack)  if not visited[i]
    end
    stack
  end
end


def alphabet_order(words)
  alphabet_set =  Immutable::SortedSet.new(words.map{ |word| word.split('')}.flatten)
  alphabet_count = alphabet_set.length

  alpha_to_ind = {}
  alphabet_set.each.with_index { |x, i| alpha_to_ind[x] = i }
  ind_to_alpha = {}
  alphabet_set.map.with_index { |x, i| ind_to_alpha[i] = x }

  graph = Graph.new(alphabet_count)
  (0..(words.length - 2)).to_a.each do |i|
    puts(i, words[i], words[i + 1])
    word1 = words[i].split('')
    word2 = words[i + 1].split('')

    pairs = word1.zip(word2).select { |x, y| x && y }
    pairs.each do |ch1, ch2|
      if ch1 != ch2
        graph.add_edge(alpha_to_ind[ch1], alpha_to_ind[ch2])
        break
      end
    end
  end

  print("\n graph.1 ")
  print(graph.graph[1])
  print("\n graph.0 ")
  print(graph.graph[0])

  sorted_alphabet = graph.topological_sort()
  sorted_alphabet.map { |alpha| ind_to_alpha[alpha] }.compact
end
