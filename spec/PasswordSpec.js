describe("Password Checker", function(){   
  
  it('should check if password longer than 8 numbers ', function(){
    let result = password_is_valid('lisaleratomabe');
    expect(result).toBe(true);
})

it('should check if password null', function(){
  let result = password_is_valid('');
  expect(result).toBe(false);
})

it('should check if password contains an uppercase', function(){
  let result = password_is_valid('LisaLeratoMabe');
  expect(result).toBe(true);
})

  it('should check if password contains a lowercase', function(){
    let result = password_is_valid('lisaleratomabe');
    expect(result).toBe(true);
})

it('should check if password contains numbers', function(){
    let result = password_is_valid('lisamabe25');
    expect(result).toBe(true);
})

it('should check if password contains lowercase, uppercase, numbers and is longer than 8 letters', function(){
    let result = password_is_valid('LisaMabe25');
    expect(result).toBe(true);
})

it('should throw an exception when password is invalid', function(){  
    expect(function(){throw('invalid password')}).toThrow('invalid password');
})

})

