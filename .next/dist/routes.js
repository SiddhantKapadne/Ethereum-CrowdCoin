'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:address', 'campaigns/show').add('/campaigns/:address/requests', 'campaigns/requests/index').add('/campaigns/:address/requests/new', 'campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNDLEFBREQsSUFDSyxBQURMLGtCQUN1QixBQUR2QixpQkFFQyxBQUZELElBRUssQUFGTCx1QkFFNEIsQUFGNUIsa0JBR0MsQUFIRCxJQUdLLEFBSEwsZ0NBR3FDLEFBSHJDLDRCQUlDLEFBSkQsSUFJSyxBQUpMLG9DQUl5QyxBQUp6Qzs7QUFPQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NpZGRoYW50L0RvY3VtZW50cy9FdGhlcmV1bS9raWNrc3RhcnQifQ==