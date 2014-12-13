import DS from 'ember-data';

var Request = DS.Model.extend({
  requestorType: DS.attr('string'),
  title: DS.attr('string'),
  surname: DS.attr('string'),
  givenName: DS.attr('string'),
  streetNumber: DS.attr('string'),
  streetName: DS.attr('string'),
  nameOfBusiness: DS.attr('string'),
  AptNumber: DS.attr('string'),
  postOfficeBox: DS.attr('string'),
  city: DS.attr('string'),
  province: DS.attr('string'),
  country: DS.attr('string'),
  postalCode: DS.attr('string'),
  telephoneNumber: DS.attr('string'),
  faxNumber: DS.attr('string'),
  email: DS.attr('string'),
  isOwnBehalf: DS.attr('boolean'),
  requestorCategory: DS.attr('string'),
  receivedFormat: DS.attr('string'),
});

Request.reopenClass({
  FIXTURES: [
    {
      id: 1,
      requestorType: 'Canadian citizen',
      title: 'Mr.',
      surname: 'Bull',
      givenName: 'Justin',
      streetNumber: '123',
      streetName: 'Fakename Ave.',
      nameOfBusiness: '',
      AptNumber: '552',
      postOfficeBox: '',
      city: 'Toronto',
      province: 'Ontario',
      country: 'Canada',
      postalCode: 'X1X 1X1',
      telephoneNumber: '416-555-1324',
      faxNumber: '',
      email: 'justin@example.com',
      isOwnBehalf: true,
      requestorCategory: 'Member of the Public',
      receivedFormat: 'Paper copy',
    },
    {
      id: 2,
      requestorType: 'Canadian citizen',
      title: 'Ms.',
      surname: 'Sanderson',
      givenName: 'Sally',
      streetNumber: '73',
      streetName: 'Ontario Cres.',
      nameOfBusiness: 'ATIP Company',
      AptNumber: 'Suite 105',
      postOfficeBox: '',
      city: 'Toronto',
      province: 'Ontario',
      country: 'Canada',
      postalCode: 'X1X 1X1',
      telephoneNumber: '416-555-5431',
      faxNumber: '',
      email: 'atip@example.com',
      isOwnBehalf: true,
      requestorCategory: 'Member of the Public',
      receivedFormat: 'Paper copy',
    },
  ]
});

export default Request;
