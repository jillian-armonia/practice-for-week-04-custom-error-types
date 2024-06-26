// Your code here
class ValidationError extends Error{
  constructor(...params){
    super(...params);
    this.name = 'ValidationError';
    this.message = this.message || 'Invalid input';
  }


}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
