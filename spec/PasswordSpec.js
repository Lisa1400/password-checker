describe("Password Checker", function(){   
  
  it('should check if password longer than 8 numbers ', function(){
    let result = password_is_valid('lisaleratomabe');
    expect(result).toBe(true);
})

it('should check if password null', function(){
  expect(() => {password_is_valid('');}).toThrow(new Error("please enter a password!"));
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

it('should throw an exception when password is invalid', () => {  
  expect(() => {password_is_valid('lisa');}).toThrow(new Error("please enter a VALID password!"));
})

})

