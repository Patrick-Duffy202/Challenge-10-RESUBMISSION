const Employee = require('../lib/Employee');

test('create an employee', () => {
    const employee= new Employee ('Patrick', 57, 'Patrick@patrick.com')
    expect(employee.name).toEqual('Patrick');
    expect(employee.id).toEqual(57);
    expect(employee.email).toEqual('Patrick@patrick.com');
  });