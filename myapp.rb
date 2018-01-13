require 'sinatra'
if development?
  require 'sinatra/reloader'
end

get '/' do
  guess = params['guess'].to_i
  cheat = params['cheat']
  result = match(guess)
  dec_guess(params)

  change_sec(@@guess_num, guess)
  number = @@secret_number
  erb :index, :locals => {:number => number, :guess => guess, :result => result, :cheat => cheat}
end

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
