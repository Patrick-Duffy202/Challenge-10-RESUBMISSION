const Manager = require('../lib/Manager');

test('create a manager', () => {
    const manager= new Manager ('Patrick', 57, 'Patrick@patrick.com', 202)
    expect(manager.name).toEqual('Patrick');
    expect(manager.id).toEqual(57);
    expect(manager.email).toEqual('Patrick@patrick.com');
    expect(manager.officeNumber).toEqual(202)
  });