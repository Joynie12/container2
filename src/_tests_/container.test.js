const ErrorRepository = require('../container');

describe('ErrorRepository', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
  });

  test('should add and translate errors correctly', () => {
    errorRepo.addError(1, 'Error 1');
    errorRepo.addError(2, 'Error 2');

    expect(errorRepo.translate(1)).toBe('Error 1');
    expect(errorRepo.translate(2)).toBe('Error 2');
  });

  test('should return "Unknown error" for unknown error codes', () => {
    expect(errorRepo.translate(3)).toBe('Unknown error');
    expect(errorRepo.translate(100)).toBe('Unknown error');
  });
});
