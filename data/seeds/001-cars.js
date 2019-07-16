exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {
          VIN: 'JA3AU26U18U042758',
          Year: 2008,
          Make: 'Mitsubishi',
          Model: 'Lancer',
          Mileage: 91267
        },
        {
          VIN: '1N4AB41DXWC732852',
          Year: 1998,
          Make: 'Nissan',
          Model: 'Sentra',
          Mileage: 135682,
          TitleStatus: 'Salvage'
        },
        {
          VIN: '3VWDZ7AJ7BM373945',
          Year: 2011,
          Make: 'Volkswagen',
          Model: 'Jetta',
          Mileage: 56187,
          TransmissionType: 'Manual',
          TitleStatus: 'Clean'
        },
        {
          VIN: '4F2CZ96153KM00975',
          Year: 2003,
          Make: 'Mazda',
          Model: 'Tribute',
          Mileage: 168221,
          TransmissionType: 'Automatic',
          TitleStatus: 'Clean'
        },
        {
          VIN: 'KMHDU4AD5AU136970',
          Year: 2010,
          Make: 'Hyundai',
          Model: 'Elantra',
          Mileage: 45281,
          TransmissionType: 'Automatic'
        }
      ]);
    });
};
