import { gql } from '@apollo/client';

const VEHICLE_SEARCH_HISTORY_QUERY = gql`
  query VehicleSearchHistoryQuery($userId: String!) {
    store {
      getvehicleDetail(userId: $userId) {
        id
        userVehicle {
          userid
          vehicle {
            vehicleId
            year
            make
            model
            submodel
            engine
            current
            bodyType
            bodyDoors
            driveType
            aspirationname
            bedlength
            bedtypename
            bodynumdoors
            bodytypename
            brakeabsname
            brakesystemname
            cylinderheadtypename
            drivetypename
            enginedesignationname
            enginevinname
            engineversion
            frontbraketypename
            frontspringtypename
            fueldeliverysubtypename
            fueldeliverytypename
            fuelsystemcontroltypename
            fuelsystemdesignname
            fueltypename
            ignitionsystemtypename
            mfrbodycodename
            rearbraketypename
            rearspringtypename
            regionname
            steeringsystemname
            steeringtypename
            transmissioncontroltypename
            transmissionmfrcode
            transmissionmfrname
            transmissionnumspeeds
            transmissionrange
            transmissiontypename
            valvesperengine
            wheelbase
            skuid
            partnumber
          }
        }
      }
    }
  }
`;

export default VEHICLE_SEARCH_HISTORY_QUERY;
