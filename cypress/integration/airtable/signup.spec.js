describe('Airtable signup', () => {
    beforeEach(() => {
      cy.visit('https://airtable.com/signup')
    })
  
    it('Add collabrator during onboarding', () => {
      //Create a date time object to generate unique accounts
      const uniqueSeed = Date.now().toString();
      //Get a unique emaile id each and every time
      var email = 'test'+uniqueSeed+'@gmail.com'
      var fullName = 'frist'+uniqueSeed+'last'
      var coworker1 = 'coworker'+uniqueSeed+'@gmail.com'
      const password = 'FirstName!2'
      const baseName = "TestBase"
      cy.createUser(fullName, email, password)
      cy.contains('Skip').click()
      cy.addCollabratorDuringOnBoarding(coworker1)

      //Add new Base
      cy.createBase(baseName)

      //Click on share and verify Collabrator
      cy.contains('Share').click()
      cy.get('.pt2 > :nth-child(3) > :nth-child(2)').click()
      cy.verifyCollabrator(coworker1)
    })

    it('Add collabrator after creating a base', () => {
      const uniqueSeed = Date.now().toString();
      //Get a unique email id each and every time
      var email = 'test'+uniqueSeed+'@gmail.com'
      var fullName = 'frist'+uniqueSeed+'last'
      var coworker1 = 'coworker'+uniqueSeed+'@gmail.com'
      const password = 'FirstName!2'
      const baseName = "TestBase"
      cy.createUser(fullName, email, password)
      cy.clearOnboarding()
      cy.createBase(baseName)
      cy.addCollabrator(coworker1)
      cy.verifyCollabrator(coworker1)
    })
  })