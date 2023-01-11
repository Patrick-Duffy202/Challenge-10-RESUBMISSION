const Engineer = require('../lib/Engineer');

test('create an engineer', () => {
    const engineer= new Engineer ('Patrick', 57, 'Patrick@patrick.com')
    expect(engineer.name).toEqual('Patrick');
    expect(engineer.id).toEqual(57);
    expect(engineer.email).toEqual('Patrick@patrick.com');
  });