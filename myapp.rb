require 'sinatra'
if development?
  require 'sinatra/reloader'
end

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
  matched = alpha_match(@@word, alphabet)
  place = find_index(@@word, alphabet)
  erb :hangman, :locals => {:alphabet => alphabet, :place => place, :matched => matched, :length => length}
end
#for hangman
#random generated word
#prompt for users to enter letter
#show letter on screen if part of word
@@word = "hello"
def parse_word(word)
  word.downcase.split('')
end

def alpha_match(word, letter)
  if !letter.nil?
    word.include?(letter)
  end
end

def find_index(word, letter)
  if !letter.nil?

     arr = parse_word(word)
     inds = []
     arr.each_with_index do |w,ind|
       if w == letter
         inds << ind
       end
     end
     inds
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
