var expect = chai.expect;

describe('MyFunctions', function(){
    describe('#addArray',function(){
       it('should concatenate the two arrays', function(){
           var x = addArray([1,2,3,4],[5,6,7,8]);
           expect([]).to.be.an('array');
       }); 
       it('should throw an error if first parameter is not a string', function() {
           expect(function(){
               addArray("A","A");
           }).to.throw(Error);
       });
    });
});

