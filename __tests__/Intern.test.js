const Intern = require('../lib/Intern');

test('create an intern', () => {
    const intern= new Intern ('Patrick', 57, 'Patrick@patrick.com', 'University of Houston')
    expect(intern.name).toEqual('Patrick');
    expect(intern.id).toEqual(57);
    expect(intern.email).toEqual('Patrick@patrick.com');
    expect(intern.school).toEqual('University of Houston');
  });