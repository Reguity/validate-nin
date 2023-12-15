module.exports = [
    './validators/China/person',
    './validators/Denmark/organization',
    './validators/Denmark/person',
    './validators/Finland/person',
    './validators/India/person',
    './validators/Nigeria/person',
    './validators/Norway/organization',
    './validators/Norway/person',
    './validators/SouthAfrica/person',
    './validators/Sweden/organization',
    './validators/Sweden/person',
    './validators/UnitedKingdom/organization',
    './validators/UnitedKingdom/person',
    './validators/UnitedStates/organization',
    './validators/UnitedStates/person'
].map(validator => require(validator));