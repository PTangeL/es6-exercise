// 15: spread - with-arrays
// To do: make all tests pass, leave the expect lines unchanged!

describe('spread with object properties', () => {
  const person = {
    name: 'Paco',
    surname: 'Pil',
    age: 31
  }

  it('extracts each property item using the old way', () => {
    const name = __
    const surname = __
    expect(name).toEqual('Paco')
    expect(surname).toEqual('Pil')
  })

  it('extracts each property item using the new method', () => {

    expect(name).toEqual('Paco')
    expect(surname).toEqual('Pil')
  })

  it('we got our car but we want to add more properties, with the old way', () => {
    let myCar = {
      wheels: 4,
      doors: 4,
      topSpeed: 120
    }

    // How you add new properties ?


    expect(myCar).toEqual({
      wheels: 6,
      doors: 4,
      topSpeed: 250,
      color: 'red',
      plate: '123EF'
    })
  })


  it('we got our car but we want to add more properties, with the new fashion way', () => {
    let myCar = {
      wheels: 4,
      doors: 4,
      topSpeed: 120
    }

    const myUpgrade = {
      wheels: 6,
      topSpeed: 250,
      color: 'red',
      plate: '123EF'
    }

    // How you add new properties to myCar ?


    expect(myCar).toEqual({
      wheels: 6,
      doors: 4,
      topSpeed: 250,
      color: 'red',
      plate: '123EF'
    })
  })

})