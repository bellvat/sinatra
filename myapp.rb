require 'sinatra'
require 'json'
if development?
  require 'sinatra/reloader'
end
enable :sessions

get '/random' do
  guess = params['guess'].to_i
  cheat = params['cheat']
  result = match(guess)
  dec_guess(params)
  change_sec(@@guess_num, guess)
  number = @@secret_number
  erb :random, :locals => {:number => number, :guess => guess, :result => result, :cheat => cheat}
end

get '/hangman' do
  alphabet = params['clickedAlpha']
  length = @@word.size
  place = find_index(@@word, @@arr_alph)
  right_guess = right_guess(place, length)
  erb :hangman, :locals => {:alphabet => alphabet, :right_guess => right_guess, :place => place, :length => length}
end

post '/hangman' do
  alphabet = params['clickedAlpha']
  #add_list(alphabet)
  length = @@word.size
  alpha_match(@@word, alphabet)
  place = find_index(@@word, @@arr_alph)
  right_guess = right_guess(place, length)
  h_guess(@@word, alphabet,right_guess)
  erb :hangman, :locals => {:alphabet => alphabet, :right_guess => right_guess, :place => place, :length => length}
end
#for hangman
#random generated word
#prompt for users to enter letter
#show letter on screen if part of word
@@arr_alph = []
@@word = 'hello'
@@hangman_guess = 0
@@list = []


def get_words(file)
  lines = File.readlines(file)
  num = rand(1000)
  @@word = lines[num].strip
end

def add_list(alphabet)
  if !letter.nil?
    #@@list << alphabet
  end
end

def h_guess(word, letter, right_guess)
  if !letter.nil?
    if @@hangman_guess == 9
      get_words('words.txt')
      @@hangman_guess = 0
      @@arr_alph = []
    elsif word.include?(letter)
    elsif right_guess == true
      @@hangman_guess = 0
      get_words('words.txt')
      @@arr_alph = []
    else
      @@hangman_guess += 1
    end
  end
end

def parse_word(word)
  word.downcase.split('')
end

def missing_letters(word, arr_alph, letter)
  val = true
  if !letter.nil?
    word.split('').each do |l|
      if !arr_alph.include?(l)
        val = false
      end
    end
  end
  val
end

def alpha_match(word, letter)
  if !letter.nil?
    if word.include?(letter)
      @@arr_alph << letter if !@@arr_alph.include?(letter)
    end
  end
end

def find_index(word, letter)
  if !letter.nil?
     arr = parse_word(word)
     inds = {}
     letter.each do |l|
       arr.each_with_index do |w,ind|
         if w == l
           inds[l] ||= []
           inds[l] << ind
         end
       end
     end
     inds.to_json
   end
end

def right_guess(place, length)
  guess = JSON.parse(place).values.flatten
  if guess.length == length
    return true
  else
    return false
  end
end
#for random number
@@guess_num = 3
@@secret_number = rand(1..20)

def dec_guess(params)
  if params.include?(:guess)
    @@guess_num -= 1
  end
end

def change_sec(times, guess)
  if times == 0
    @@secret_number = rand(1..20)
    @@guess_num = 3
  elsif guess == @@secret_number
    @@secret_number = rand(1..20)
    @@guess_num = 4
  end
end

def match(guess)
  if guess < @@secret_number
    return "Too low!"
  elsif guess == @@secret_number
    return "Perfect guess! Let's play again! Enter a guess."
  else
    return "Too high!"
  end
end
