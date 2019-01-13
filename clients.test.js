const clientsController = require('./clients.controller');
const clientsService = require('./clients.service');
const chai = require('chai');
const sinon = require('sinon');

describe('Tests for case controller', () => {
    describe('the getByAccountId function', () => {
        let getClientById;

        beforeEach(() => {
            getClientById = sinon.stub(clientsService, 'getClientById');

            getClientById.withArgs('1')
                .returns(Promise.resolve([
                    {
                        Id: '1',
                        Name: 'Vinícius Silva'
                    }
                ])
            );

            getClientById.withArgs('2')
               .returns(Promise.resolve([
                    {
                        Id: '2',
                        Name: 'Ana Clara'
                    }
                ])
            );

            getClientById.withArgs('3')
               .returns(Promise.resolve([
                    {
                        Id: '3',
                        Name: 'Clarissa Müller'
                    }
                ])
            );
        });

        it('should return data by id 1', async () => {
            // Initial setup
            let expectedData = [
              {
                Id: '1',
                Name: 'Vinícius Silva'
              }
            ];
      
            // Request and response mock to express
            const req = {
              params: {
                id: '1'
              }
            };
            const res = {
              // Replace empty function with a spy
              send: sinon.spy(),
            };
      
            // Execute the function
            await clientsController.getClientById(req, res);
      
            chai.expect(getClientById.calledOnce).to.be.true;
            chai.expect(res.send.calledOnce).to.be.true;
            chai.expect(JSON.stringify(res.send.firstCall.args[0])).to.equal(JSON.stringify(expectedData));
        });

        it('should return data by id 2', async () => {
            // Initial setup
            let expectedData = [
              {
                Id: '2',
                Name: 'Ana Clara'
              }
            ];
      
            // Request and response mock to express
            const req = {
              params: {
                id: '2'
              }
            };
            const res = {
              // Replace empty function with a spy
              send: sinon.spy(),
            };
      
            // Execute the function
            await clientsController.getClientById(req, res);
      
            chai.expect(getClientById.calledOnce).to.be.true;
            chai.expect(res.send.calledOnce).to.be.true;
            chai.expect(JSON.stringify(res.send.firstCall.args[0])).to.equal(JSON.stringify(expectedData));
        });

        it('should return data by id 3', async () => {
            // Initial setup
            let expectedData = [
              {
                Id: '3',
                Name: 'Clarissa Müller'
              }
            ];
      
            // Request and response mock to express
            const req = {
              params: {
                id: '3'
              }
            };
            const res = {
              // Replace empty function with a spy
              send: sinon.spy(),
            };
      
            // Execute the function
            await clientsController.getClientById(req, res);
      
            chai.expect(getClientById.calledOnce).to.be.true;
            chai.expect(res.send.calledOnce).to.be.true;
            chai.expect(JSON.stringify(res.send.firstCall.args[0])).to.equal(JSON.stringify(expectedData));
        });

        afterEach(() => {
            getClientById.restore();
        });
    });
})