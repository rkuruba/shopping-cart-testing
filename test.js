
//Unit Tests
describe('addValue', function() {
  it('should return the sum of two whole numbers', function() {
    expect(addValue(2, 4)).to.equal(6);
  });

  it('should return the sum of two decimal numbers', function() {
    expect(addValue(2.5, 1.5)).to.equal(4);
  });

  it('should return the sum of a decimal number and a string that is coercible to a number', function() {
    expect(addValue(2.5, '1.5')).to.equal(4);
  });

  it('should return the original total for invalid inputs', function() {
    expect(addValue(4, 'cow')).to.equal(4);
  });
});

//Functional Tests
describe('price click', function () {

  beforeEach(function () {
    total = 0;
  });

  it('should add a price on click of Bread', function () {

    $('.add-to-cart').trigger('click');
    expect($('.add-to-cart').text()).to.equal('2.35'); // $(".add-to-cart").click(function(event)
  });

  it('should add 2 prices on 2 clicks Bread and Milk', function () {

    $('.add-to-cart').trigger('click');
    $('.add-to-cart').trigger('click');
    expect($('#total-cart').text()).to.equal('4.91');
  });

});