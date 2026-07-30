( async () => {
    
    const database = require('./Connection/db');
    const Transations = require('./Models/transations');
    await database.sync();

    /*const newTransation = await Transations.create({
        type: 'despeza',
        transation: "Energia",
        price: 249.23,
        category: 'Casa',
        data: '2026-07-23'
    })*/
    
    const transations = await Transations.findAll();
    console.log(transations)
})();

/*  transation: {
        type: STRING,
        allowNull: false
    },
    price: {
        type: DECIMAL,
        allowNull: false
    },
    category: {
        type: DECIMAL,
        allowNull: false,
    },
    status: {
        type: BOOLEAN,
        defaultValue: false,
    },
    note: {
        type: DECIMAL
    },
    data: {
        type: DATE,
        //allowNull: false
    }
        
/*reference: https://www.youtube.com/watch?v=g5ij7NIPR2s-*/