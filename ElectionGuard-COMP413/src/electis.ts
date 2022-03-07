// import encryptedBallot from "./encrypted_result_hex.json";
// import * as manifest from './DemoBallot/election_manifest_simple.json'
// import {get_optional} from "./utils";
// import * as ballot from './DemoBallot/demo_ballot_schema.json'

import moment from 'moment';

import * as ballots from './simple_election_data';

import {ElementModP, ElementModQ} from "./group";
import {InternalManifest} from './manifest';
import {buildManifest} from "./API/APIUtils";
import {serialize_compatible_CiphertextBallot} from "./serialization_browser";
import {encrypt_ballot} from "./simple_elections";


window.ElementModQ = ElementModQ
window.ElementModP = ElementModP

window.PlaintextBallot = ballots.PlaintextBallot
window.PlaintextBallotContest = ballots.PlaintextBallotContest
window.PlaintextBallotSelection = ballots.PlaintextBallotSelection
window.CiphertextElectionContext = ballots.CiphertextElectionContext

window.buildManifest = buildManifest
window.InternalManifest = InternalManifest

window.encrypt_ballot = encrypt_ballot

window.serializeBallot = serialize_compatible_CiphertextBallot
