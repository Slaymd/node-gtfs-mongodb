// GTFS import script
const importGTFS = require('./import');

// GTFS export script
const exportGTFS = require('./export');

// Standard GTFS Filenames
const { getAgencies } = require('./gtfs/agencies');
const { getCalendars } = require('./gtfs/calendars');
const { getCalendarDates } = require('./gtfs/calendar-dates');
const { getFareAttributes } = require('./gtfs/fare-attributes');
const { getFareRules } = require('./gtfs/fare-rules');
const { getFeedInfo } = require('./gtfs/feed-info');
const { getFrequencies } = require('./gtfs/frequencies');
const { getRoutes } = require('./gtfs/routes');
const { getShapes, getShapesAsGeoJSON } = require('./gtfs/shapes');
const { getStops, getStopsAsGeoJSON } = require('./gtfs/stops');
const { getStoptimes } = require('./gtfs/stop-times');
const { getTransfers } = require('./gtfs/transfers');
const { getTrips, getDirectionsByRoute } = require('./gtfs/trips');

// Non-standard GTFS Filenames
const { getStopAttributes } = require('./non-standard/stop-attributes');
const { getTimetables } = require('./non-standard/timetables');
const { getTimetableStopOrders } = require('./non-standard/timetable-stop-order');
const { getTimetablePages } = require('./non-standard/timetable-pages');

exports.import = importGTFS;
exports.export = exportGTFS;

exports.getAgencies = getAgencies;

exports.getCalendarDates = getCalendarDates;

exports.getCalendars = getCalendars;

exports.getFareAttributes = getFareAttributes;

exports.getFareRules = getFareRules;

exports.getFeedInfo = getFeedInfo;

exports.getFrequencies = getFrequencies;

exports.getRoutes = getRoutes;

exports.getShapes = getShapes;
exports.getShapesAsGeoJSON = getShapesAsGeoJSON;

exports.getStops = getStops;
exports.getStopsAsGeoJSON = getStopsAsGeoJSON;

exports.getStoptimes = getStoptimes;

exports.getTransfers = getTransfers;

exports.getTrips = getTrips;
exports.getDirectionsByRoute = getDirectionsByRoute;

exports.getStopAttributes = getStopAttributes;

exports.getTimetables = getTimetables;

exports.getTimetableStopOrders = getTimetableStopOrders;

exports.getTimetablePages = getTimetablePages;

exports.Models = {
  Agency: require('../models/gtfs/agency'),
  Calendar: require('../models/gtfs/calendar'),
  CalendarDate: require('../models/gtfs/calendar-date'),
  FareAttribute: require('../models/gtfs/fare-attribute'),
  FareRule: require('../models/gtfs/fare-rule'),
  FeedInfo: require('../models/gtfs/feed-info'),
  Frequencies: require('../models/gtfs/frequencies'),
  Route: require('../models/gtfs/route'),
  Shape: require('../models/gtfs/shape'),
  Stop: require('../models/gtfs/stop'),
  StopTime: require('../models/gtfs/stop-time'),
  Transfer: require('../models/gtfs/transfer'),
  Trip: require('../models/gtfs/trip')
};