const orderData = [
    {
        key: '12345',
        orderFrom: 'david',
        pickupTimeStart: '9:00 AM',
        pickupTimeEnd: '9:30 AM',
        orderList: [
            {
                name: 'All Beef HotDog',
                quantity: 1,
            },
            {
                name: 'Chicken HotDog',
                quantity: 2,
            },
        ],
        notes: '',
        charge: '5.25',
    },
    {
        key: '12346',
        orderFrom: 'lindsey',
        pickupTimeStart: '9:30 AM',
        pickupTimeEnd: '10:00 AM',
        orderList: [
            {
                name: 'Green Tea',
                quantity: 1,
            },
        ],
        notes: 'Extra ketchup, thanks',
        charge: '2.25',
    },
]

export default orderData;