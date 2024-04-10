
// APOD API
function getAPI() {
    const requestUrl = 'https://api.nasa.gov/planetary/apod';
}
//Launch API
{
    "count": 352,
    "next": "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=10&offset=10",
    "previous": null,
    "results": [
        {
            "id": "c6344720-1266-4697-90ab-943a6f1760a5",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/c6344720-1266-4697-90ab-943a6f1760a5/",
            "slug": "falcon-9-block-5-bandwagon-1-dedicated-mid-inclina",
            "name": "Falcon 9 Block 5 | Bandwagon 1 (Dedicated Mid-Inclination Rideshare)",
            "status": {
                "id": 6,
                "name": "Launch in Flight",
                "abbrev": "In Flight",
                "description": "The launch vehicle has lifted off from the launchpad."
            },
            "last_updated": "2024-04-07T23:39:56Z",
            "net": "2024-04-07T23:16:00Z",
            "window_end": "2024-04-07T23:16:00Z",
            "window_start": "2024-04-07T23:16:00Z",
            "net_precision": {
                "id": 1,
                "name": "Minute",
                "abbrev": "MIN",
                "description": "The T-0 is accurate to the minute."
            },
            "probability": 99,
            "weather_concerns": "Thick Cloud Layers Rule",
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
                "id": 121,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                "name": "SpaceX",
                "type": "Commercial"
            },
            "rocket": {
                "id": 7985,
                "configuration": {
                    "id": 164,
                    "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/164/",
                    "name": "Falcon 9",
                    "family": "Falcon",
                    "full_name": "Falcon 9 Block 5",
                    "variant": "Block 5"
                }
            },
            "mission": {
                "id": 6511,
                "name": "Bandwagon 1 (Dedicated Mid-Inclination Rideshare)",
                "description": "Dedicated rideshare flight to a mid-inclination orbit with dozens of small microsatellites and nanosatellites for commercial and government customers. Payloads include Capella Space's Acadia-4 and the South Korean government's 425 Project Flight 2.",
                "launch_designator": null,
                "type": "Dedicated Rideshare",
                "orbit": {
                    "id": 8,
                    "name": "Low Earth Orbit",
                    "abbrev": "LEO"
                },
                "agencies": [
                    {
                        "id": 121,
                        "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                        "name": "SpaceX",
                        "featured": true,
                        "type": "Commercial",
                        "country_code": "USA",
                        "abbrev": "SpX",
                        "description": "Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX operates from many pads, on the East Coast of the US they operate from SLC-40 at Cape Canaveral Space Force Station and historic LC-39A at Kennedy Space Center. They also operate from SLC-4E at Vandenberg Space Force Base, California, usually for polar launches. Another launch site is being developed at Boca Chica, Texas.",
                        "administrator": "CEO: Elon Musk",
                        "founding_year": "2002",
                        "launchers": "Falcon | Starship",
                        "spacecraft": "Dragon",
                        "launch_library_url": null,
                        "total_launch_count": 347,
                        "consecutive_successful_launches": 47,
                        "successful_launches": 335,
                        "failed_launches": 11,
                        "pending_launches": 141,
                        "consecutive_successful_landings": 11,
                        "successful_landings": 299,
                        "failed_landings": 24,
                        "attempted_landings": 322,
                        "info_url": "http://www.spacex.com/",
                        "wiki_url": "http://en.wikipedia.org/wiki/SpaceX",
                        "logo_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/spacex_logo_20220826094919.png",
                        "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/spacex_image_20190207032501.jpeg",
                        "nation_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/spacex_nation_20230531064544.jpg"
                    }
                ],
                "info_urls": [],
                "vid_urls": []
            },
            "pad": {
                "id": 87,
                "url": "https://lldev.thespacedevs.com/2.2.0/pad/87/",
                "agency_id": 121,
                "name": "Launch Complex 39A",
                "description": null,
                "info_url": null,
                "wiki_url": "https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39#Launch_Pad_39A",
                "map_url": "https://www.google.com/maps?q=28.60822681,-80.60428186",
                "latitude": "28.60822681",
                "longitude": "-80.60428186",
                "location": {
                    "id": 27,
                    "url": "https://lldev.thespacedevs.com/2.2.0/location/27/",
                    "name": "Kennedy Space Center, FL, USA",
                    "country_code": "USA",
                    "description": null,
                    "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_27_20200803142447.jpg",
                    "timezone_name": "America/New_York",
                    "total_launch_count": 234,
                    "total_landing_count": 0
                },
                "country_code": "USA",
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_87_20200803143537.jpg",
                "total_launch_count": 176,
                "orbital_launch_attempt_count": 175
            },
            "webcast_live": false,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/falcon_9_image_20230807133459.jpeg",
            "infographic": null,
            "program": [],
            "orbital_launch_attempt_count": 6645,
            "location_launch_attempt_count": 234,
            "pad_launch_attempt_count": 176,
            "agency_launch_attempt_count": 347,
            "orbital_launch_attempt_count_year": 67,
            "location_launch_attempt_count_year": 8,
            "pad_launch_attempt_count_year": 8,
            "agency_launch_attempt_count_year": 36,
            "type": "normal"
        },
        {
            "id": "1b8e6f37-c703-4e48-b160-470ffe5ecb26",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/1b8e6f37-c703-4e48-b160-470ffe5ecb26/",
            "slug": "angara-a5blok-dm-03-vostochny-angara-test-flight",
            "name": "Angara A5/Blok DM-03 | Vostochny Angara Test Flight",
            "status": {
                "id": 2,
                "name": "To Be Determined",
                "abbrev": "TBD",
                "description": "Current date is a placeholder or rough estimation based on unreliable or interpreted sources."
            },
            "last_updated": "2024-03-27T13:24:53Z",
            "net": "2024-04-09T00:00:00Z",
            "window_end": "2024-04-09T00:00:00Z",
            "window_start": "2024-04-09T00:00:00Z",
            "net_precision": {
                "id": 5,
                "name": "Day",
                "abbrev": "DAY",
                "description": "The T-0 is expected on the given day."
            },
            "probability": null,
            "weather_concerns": null,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
                "id": 96,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/96/",
                "name": "Khrunichev State Research and Production Space Center",
                "type": "Government"
            },
            "rocket": {
                "id": 2543,
                "configuration": {
                    "id": 196,
                    "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/196/",
                    "name": "Angara A5/Blok DM-03",
                    "family": "Angara",
                    "full_name": "Angara A5/Blok DM-03",
                    "variant": "A5/DM-03"
                }
            },
            "mission": {
                "id": 6652,
                "name": "Vostochny Angara Test Flight",
                "description": "First test launch of the Angara A5 launch vehicle from the Vostochny Cosmodrome. The rocket will carry a mass simulator payload.",
                "launch_designator": null,
                "type": "Test Flight",
                "orbit": {
                    "id": 25,
                    "name": "Unknown",
                    "abbrev": "N/A"
                },
                "agencies": [],
                "info_urls": [],
                "vid_urls": []
            },
            "pad": {
                "id": 108,
                "url": "https://lldev.thespacedevs.com/2.2.0/pad/108/",
                "agency_id": 63,
                "name": "Cosmodrome Site 1A",
                "description": null,
                "info_url": null,
                "wiki_url": "https://en.wikipedia.org/wiki/Vostochny_Cosmodrome",
                "map_url": "https://www.google.com/maps?q=51.884395,128.333932",
                "latitude": "51.884395",
                "longitude": "128.333932",
                "location": {
                    "id": 18,
                    "url": "https://lldev.thespacedevs.com/2.2.0/location/18/",
                    "name": "Vostochny Cosmodrome, Siberia, Russian Federation",
                    "country_code": "RUS",
                    "description": null,
                    "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_18_20200803142401.jpg",
                    "timezone_name": "Asia/Yakutsk",
                    "total_launch_count": 16,
                    "total_landing_count": 0
                },
                "country_code": "RUS",
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_108_20200803143525.jpg",
                "total_launch_count": 0,
                "orbital_launch_attempt_count": 0
            },
            "webcast_live": false,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/angara_a52fper_image_20211227193648.jpg",
            "infographic": null,
            "program": [],
            "orbital_launch_attempt_count": 6646,
            "location_launch_attempt_count": 17,
            "pad_launch_attempt_count": 1,
            "agency_launch_attempt_count": 194,
            "orbital_launch_attempt_count_year": 68,
            "location_launch_attempt_count_year": 2,
            "pad_launch_attempt_count_year": 1,
            "agency_launch_attempt_count_year": 1,
            "type": "normal"
        },
        {
            "id": "a32fa9ec-7925-4698-bbc7-a7ed1ad12621",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/a32fa9ec-7925-4698-bbc7-a7ed1ad12621/",
            "slug": "delta-iv-heavy-nrol-70",
            "name": "Delta IV Heavy | NROL-70",
            "status": {
                "id": 1,
                "name": "Go for Launch",
                "abbrev": "Go",
                "description": "Current T-0 confirmed by official or reliable sources."
            },
            "last_updated": "2024-04-05T18:28:25Z",
            "net": "2024-04-09T16:53:00Z",
            "window_end": "2024-04-09T22:51:00Z",
            "window_start": "2024-04-09T16:53:00Z",
            "net_precision": {
                "id": 1,
                "name": "Minute",
                "abbrev": "MIN",
                "description": "The T-0 is accurate to the minute."
            },
            "probability": null,
            "weather_concerns": null,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
                "id": 124,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/124/",
                "name": "United Launch Alliance",
                "type": "Commercial"
            },
            "rocket": {
                "id": 2534,
                "configuration": {
                    "id": 21,
                    "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/21/",
                    "name": "Delta IV Heavy",
                    "family": "Delta",
                    "full_name": "Delta IV Heavy",
                    "variant": "Heavy"
                }
            },
            "mission": {
                "id": 6494,
                "name": "NROL-70",
                "description": "Classified payload for the NRO.\r\nLast flight of the Delta IV Heavy rocket.",
                "launch_designator": null,
                "type": "Government/Top Secret",
                "orbit": {
                    "id": 25,
                    "name": "Unknown",
                    "abbrev": "N/A"
                },
                "agencies": [
                    {
                        "id": 181,
                        "url": "https://lldev.thespacedevs.com/2.2.0/agencies/181/",
                        "name": "National Reconnaissance Office",
                        "featured": false,
                        "type": "Government",
                        "country_code": "USA",
                        "abbrev": "NRO",
                        "description": "The National Reconnaissance Office (NRO) is a member of the United States Intelligence Community and an agency of the United States Department of Defense which designs, builds, launches, and operates the reconnaissance satellites of the U.S. federal government, and provides satellite intelligence to several government agencies, particularly signals intelligence (SIGINT) to the NSA, imagery intelligence (IMINT) to the NGA, and measurement and signature intelligence (MASINT) to the DIA.",
                        "administrator": "Director: Christopher Scolese",
                        "founding_year": "1961",
                        "launchers": "",
                        "spacecraft": "",
                        "launch_library_url": null,
                        "total_launch_count": 0,
                        "consecutive_successful_launches": 0,
                        "successful_launches": 0,
                        "failed_launches": 0,
                        "pending_launches": 0,
                        "consecutive_successful_landings": 0,
                        "successful_landings": 0,
                        "failed_landings": 0,
                        "attempted_landings": 0,
                        "info_url": "http://www.nro.gov/",
                        "wiki_url": "https://en.wikipedia.org/wiki/National_Reconnaissance_Office",
                        "logo_url": null,
                        "image_url": null,
                        "nation_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/national2520reconnaissance2520office_nation_20240228092125.png"
                    }
                ],
                "info_urls": [],
                "vid_urls": []
            },
            "pad": {
                "id": 38,
                "url": "https://lldev.thespacedevs.com/2.2.0/pad/38/",
                "agency_id": null,
                "name": "Space Launch Complex 37B",
                "description": "",
                "info_url": null,
                "wiki_url": "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_37",
                "map_url": "https://www.google.com/maps?q=28.5317,-80.56495",
                "latitude": "28.5317",
                "longitude": "-80.56495",
                "location": {
                    "id": 12,
                    "url": "https://lldev.thespacedevs.com/2.2.0/location/12/",
                    "name": "Cape Canaveral, FL, USA",
                    "country_code": "USA",
                    "description": null,
                    "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
                    "timezone_name": "America/New_York",
                    "total_launch_count": 943,
                    "total_landing_count": 50
                },
                "country_code": "USA",
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_38_20200803143515.jpg",
                "total_launch_count": 39,
                "orbital_launch_attempt_count": 39
            },
            "webcast_live": false,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/slc-37b_image_20240329083424.jpeg",
            "infographic": null,
            "program": [],
            "orbital_launch_attempt_count": 6647,
            "location_launch_attempt_count": 944,
            "pad_launch_attempt_count": 40,
            "agency_launch_attempt_count": 161,
            "orbital_launch_attempt_count_year": 69,
            "location_launch_attempt_count_year": 17,
            "pad_launch_attempt_count_year": 1,
            "agency_launch_attempt_count_year": 2,
            "type": "normal"
        },
        {
            "id": "706b81df-c365-4a6d-89f0-c52126dc91e1",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/706b81df-c365-4a6d-89f0-c52126dc91e1/",
            "slug": "falcon-9-block-5-starlink-group-6-48",
            "name": "Falcon 9 Block 5 | Starlink Group 6-48",
            "status": {
                "id": 8,
                "name": "To Be Confirmed",
                "abbrev": "TBC",
                "description": "Awaiting official confirmation - current date is known with some certainty."
            },
            "last_updated": "2024-04-06T01:29:44Z",
            "net": "2024-04-10T04:00:00Z",
            "window_end": "2024-04-10T08:31:00Z",
            "window_start": "2024-04-10T04:00:00Z",
            "net_precision": {
                "id": 2,
                "name": "Hour",
                "abbrev": "HR",
                "description": "The T-0 is accurate to the hour."
            },
            "probability": null,
            "weather_concerns": null,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
                "id": 121,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                "name": "SpaceX",
                "type": "Commercial"
            },
            "rocket": {
                "id": 8216,
                "configuration": {
                    "id": 164,
                    "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/164/",
                    "name": "Falcon 9",
                    "family": "Falcon",
                    "full_name": "Falcon 9 Block 5",
                    "variant": "Block 5"
                }
            },
            "mission": {
                "id": 6788,
                "name": "Starlink Group 6-48",
                "description": "A batch of satellites for the Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
                "launch_designator": null,
                "type": "Communications",
                "orbit": {
                    "id": 8,
                    "name": "Low Earth Orbit",
                    "abbrev": "LEO"
                },
                "agencies": [
                    {
                        "id": 121,
                        "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                        "name": "SpaceX",
                        "featured": true,
                        "type": "Commercial",
                        "country_code": "USA",
                        "abbrev": "SpX",
                        "description": "Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX operates from many pads, on the East Coast of the US they operate from SLC-40 at Cape Canaveral Space Force Station and historic LC-39A at Kennedy Space Center. They also operate from SLC-4E at Vandenberg Space Force Base, California, usually for polar launches. Another launch site is being developed at Boca Chica, Texas.",
                        "administrator": "CEO: Elon Musk",
                        "founding_year": "2002",
                        "launchers": "Falcon | Starship",
                        "spacecraft": "Dragon",
                        "launch_library_url": null,
                        "total_launch_count": 347,
                        "consecutive_successful_launches": 47,
                        "successful_launches": 335,
                        "failed_launches": 11,
                        "pending_launches": 141,
                        "consecutive_successful_landings": 11,
                        "successful_landings": 299,
                        "failed_landings": 24,
                        "attempted_landings": 322,
                        "info_url": "http://www.spacex.com/",
                        "wiki_url": "http://en.wikipedia.org/wiki/SpaceX",
                        "logo_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/spacex_logo_20220826094919.png",
                        "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/spacex_image_20190207032501.jpeg",
                        "nation_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/spacex_nation_20230531064544.jpg"
                    }
                ],
                "info_urls": [],
                "vid_urls": []
            },
            "pad": {
                "id": 80,
                "url": "https://lldev.thespacedevs.com/2.2.0/pad/80/",
                "agency_id": 121,
                "name": "Space Launch Complex 40",
                "description": null,
                "info_url": null,
                "wiki_url": "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40",
                "map_url": "https://www.google.com/maps?q=28.56194122,-80.57735736",
                "latitude": "28.56194122",
                "longitude": "-80.57735736",
                "location": {
                    "id": 12,
                    "url": "https://lldev.thespacedevs.com/2.2.0/location/12/",
                    "name": "Cape Canaveral, FL, USA",
                    "country_code": "USA",
                    "description": null,
                    "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
                    "timezone_name": "America/New_York",
                    "total_launch_count": 943,
                    "total_landing_count": 50
                },
                "country_code": "USA",
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg",
                "total_launch_count": 233,
                "orbital_launch_attempt_count": 233
            },
            "webcast_live": false,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/falcon2520925_image_20221009234147.png",
            "infographic": null,
            "program": [
                {
                    "id": 25,
                    "url": "https://lldev.thespacedevs.com/2.2.0/program/25/",
                    "name": "Starlink",
                    "description": "Starlink is a satellite internet constellation operated by American aerospace company SpaceX",
                    "agencies": [
                        {
                            "id": 121,
                            "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                            "name": "SpaceX",
                            "type": "Commercial"
                        }
                    ],
                    "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/starlink_program_20231228154508.jpeg",
                    "start_date": "2018-02-22T14:17:00Z",
                    "end_date": null,
                    "info_url": "https://starlink.com",
                    "wiki_url": "https://en.wikipedia.org/wiki/Starlink",
                    "mission_patches": [
                        {
                            "id": 7,
                            "name": "Space X Starlink Mission Patch",
                            "priority": 10,
                            "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/mission_patch_images/space2520x252_mission_patch_20221011205756.png",
                            "agency": {
                                "id": 121,
                                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                                "name": "SpaceX",
                                "type": "Commercial"
                            }
                        }
                    ],
                    "type": {
                        "id": 3,
                        "name": "Communication Constellation"
                    }
                }
            ],
            "orbital_launch_attempt_count": 6648,
            "location_launch_attempt_count": 945,
            "pad_launch_attempt_count": 234,
            "agency_launch_attempt_count": 348,
            "orbital_launch_attempt_count_year": 70,
            "location_launch_attempt_count_year": 18,
            "pad_launch_attempt_count_year": 16,
            "agency_launch_attempt_count_year": 37,
            "type": "normal"
        },
        {
            "id": "a2e723fe-c893-4eaa-9dd3-63533a703091",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/a2e723fe-c893-4eaa-9dd3-63533a703091/",
            "slug": "falcon-9-block-5-ussf-62",
            "name": "Falcon 9 Block 5 | USSF-62",
            "status": {
                "id": 8,
                "name": "To Be Confirmed",
                "abbrev": "TBC",
                "description": "Awaiting official confirmation - current date is known with some certainty."
            },
            "last_updated": "2024-04-07T22:55:08Z",
            "net": "2024-04-11T12:00:00Z",
            "window_end": "2024-04-11T16:36:00Z",
            "window_start": "2024-04-11T12:00:00Z",
            "net_precision": {
                "id": 2,
                "name": "Hour",
                "abbrev": "HR",
                "description": "The T-0 is accurate to the hour."
            },
            "probability": null,
            "weather_concerns": null,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
                "id": 121,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                "name": "SpaceX",
                "type": "Commercial"
            },
            "rocket": {
                "id": 7588,
                "configuration": {
                    "id": 164,
                    "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/164/",
                    "name": "Falcon 9",
                    "family": "Falcon",
                    "full_name": "Falcon 9 Block 5",
                    "variant": "Block 5"
                }
            },
            "mission": {
                "id": 6030,
                "name": "USSF-62",
                "description": "First Weather System Follow-on (WSF) satellite.",
                "launch_designator": null,
                "type": "Government/Top Secret",
                "orbit": {
                    "id": 13,
                    "name": "Polar Orbit",
                    "abbrev": "PO"
                },
                "agencies": [
                    {
                        "id": 1041,
                        "url": "https://lldev.thespacedevs.com/2.2.0/agencies/1041/",
                        "name": "United States Space Force",
                        "featured": false,
                        "type": "Government",
                        "country_code": "USA",
                        "abbrev": "USSF",
                        "description": "The United States Space Force (USSF) is the space service branch of the U.S. Armed Forces, one of the eight U.S. uniformed services.",
                        "administrator": null,
                        "founding_year": "2019",
                        "launchers": "",
                        "spacecraft": "",
                        "launch_library_url": null,
                        "total_launch_count": 0,
                        "consecutive_successful_launches": 0,
                        "successful_launches": 0,
                        "failed_launches": 0,
                        "pending_launches": 0,
                        "consecutive_successful_landings": 0,
                        "successful_landings": 0,
                        "failed_landings": 0,
                        "attempted_landings": 0,
                        "info_url": "https://www.spaceforce.mil/",
                        "wiki_url": "https://en.wikipedia.org/wiki/United_States_Space_Force",
                        "logo_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/united2520states2520space2520force_logo_20221102113048.png",
                        "image_url": null,
                        "nation_url": null
                    }
                ],
                "info_urls": [],
                "vid_urls": []
            },
            "pad": {
                "id": 16,
                "url": "https://lldev.thespacedevs.com/2.2.0/pad/16/",
                "agency_id": null,
                "name": "Space Launch Complex 4E",
                "description": "Space Launch Complex 4 East (SLC-4E) is a launch site at Vandenberg Space Force Base, California, U.S.\r\n\r\nThe pad was previously used by Atlas and Titan rockets between 1963 and 2005. The pad was built for use by Atlas-Agena rockets, but was later rebuilt to handle Titan rockets.",
                "info_url": null,
                "wiki_url": "https://en.wikipedia.org/wiki/Vandenberg_Space_Launch_Complex_4#SLC-4E",
                "map_url": "https://www.google.com/maps?q=34.632,-120.611",
                "latitude": "34.632",
                "longitude": "-120.611",
                "location": {
                    "id": 11,
                    "url": "https://lldev.thespacedevs.com/2.2.0/location/11/",
                    "name": "Vandenberg SFB, CA, USA",
                    "country_code": "USA",
                    "description": null,
                    "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg",
                    "timezone_name": "America/Los_Angeles",
                    "total_launch_count": 751,
                    "total_landing_count": 16
                },
                "country_code": "USA",
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_16_20200803143532.jpg",
                "total_launch_count": 140,
                "orbital_launch_attempt_count": 140
            },
            "webcast_live": false,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/falcon_9_image_20230807133459.jpeg",
            "infographic": null,
            "program": [],
            "orbital_launch_attempt_count": 6649,
            "location_launch_attempt_count": 752,
            "pad_launch_attempt_count": 141,
            "agency_launch_attempt_count": 349,
            "orbital_launch_attempt_count_year": 71,
            "location_launch_attempt_count_year": 13,
            "pad_launch_attempt_count_year": 13,
            "agency_launch_attempt_count_year": 38,
            "type": "normal"
        },
        {
            "id": "08508c47-42ea-44c8-9da6-9e2e21742994",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/08508c47-42ea-44c8-9da6-9e2e21742994/",
            "slug": "falcon-9-block-5-starlink-group-6-49",
            "name": "Falcon 9 Block 5 | Starlink Group 6-49",
            "status": {
                "id": 2,
                "name": "To Be Determined",
                "abbrev": "TBD",
                "description": "Current date is a placeholder or rough estimation based on unreliable or interpreted sources."
            },
            "last_updated": "2024-04-07T03:46:59Z",
            "net": "2024-04-13T00:00:00Z",
            "window_end": "2024-04-13T00:00:00Z",
            "window_start": "2024-04-13T00:00:00Z",
            "net_precision": {
                "id": 5,
                "name": "Day",
                "abbrev": "DAY",
                "description": "The T-0 is expected on the given day."
            },
            "probability": null,
            "weather_concerns": null,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
                "id": 121,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                "name": "SpaceX",
                "type": "Commercial"
            },
            "rocket": {
                "id": 8217,
                "configuration": {
                    "id": 164,
                    "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/164/",
                    "name": "Falcon 9",
                    "family": "Falcon",
                    "full_name": "Falcon 9 Block 5",
                    "variant": "Block 5"
                }
            },
            "mission": {
                "id": 6789,
                "name": "Starlink Group 6-49",
                "description": "A batch of satellites for the Starlink mega-constellation - SpaceX's project for space-based Internet communication system.",
                "launch_designator": null,
                "type": "Communications",
                "orbit": {
                    "id": 8,
                    "name": "Low Earth Orbit",
                    "abbrev": "LEO"
                },
                "agencies": [
                    {
                        "id": 121,
                        "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                        "name": "SpaceX",
                        "featured": true,
                        "type": "Commercial",
                        "country_code": "USA",
                        "abbrev": "SpX",
                        "description": "Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX operates from many pads, on the East Coast of the US they operate from SLC-40 at Cape Canaveral Space Force Station and historic LC-39A at Kennedy Space Center. They also operate from SLC-4E at Vandenberg Space Force Base, California, usually for polar launches. Another launch site is being developed at Boca Chica, Texas.",
                        "administrator": "CEO: Elon Musk",
                        "founding_year": "2002",
                        "launchers": "Falcon | Starship",
                        "spacecraft": "Dragon",
                        "launch_library_url": null,
                        "total_launch_count": 347,
                        "consecutive_successful_launches": 47,
                        "successful_launches": 335,
                        "failed_launches": 11,
                        "pending_launches": 141,
                        "consecutive_successful_landings": 11,
                        "successful_landings": 299,
                        "failed_landings": 24,
                        "attempted_landings": 322,
                        "info_url": "http://www.spacex.com/",
                        "wiki_url": "http://en.wikipedia.org/wiki/SpaceX",
                        "logo_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/spacex_logo_20220826094919.png",
                        "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/spacex_image_20190207032501.jpeg",
                        "nation_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/spacex_nation_20230531064544.jpg"
                    }
                ],
                "info_urls": [],
                "vid_urls": []
            },
            "pad": {
                "id": 72,
                "url": "https://lldev.thespacedevs.com/2.2.0/pad/72/",
                "agency_id": null,
                "name": "Unknown Pad",
                "description": null,
                "info_url": null,
                "wiki_url": "",
                "map_url": "https://www.google.com/maps?q=28.458,-80.528",
                "latitude": "28.458",
                "longitude": "-80.528",
                "location": {
                    "id": 12,
                    "url": "https://lldev.thespacedevs.com/2.2.0/location/12/",
                    "name": "Cape Canaveral, FL, USA",
                    "country_code": "USA",
                    "description": null,
                    "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
                    "timezone_name": "America/New_York",
                    "total_launch_count": 943,
                    "total_landing_count": 50
                },
                "country_code": "USA",
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_72_20200803143403.jpg",
                "total_launch_count": 0,
                "orbital_launch_attempt_count": 0
            },
            "webcast_live": false,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/falcon2520925_image_20221009234147.png",
            "infographic": null,
            "program": [
                {
                    "id": 25,
                    "url": "https://lldev.thespacedevs.com/2.2.0/program/25/",
                    "name": "Starlink",
                    "description": "Starlink is a satellite internet constellation operated by American aerospace company SpaceX",
                    "agencies": [
                        {
                            "id": 121,
                            "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                            "name": "SpaceX",
                            "type": "Commercial"
                        }
                    ],
                    "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/starlink_program_20231228154508.jpeg",
                    "start_date": "2018-02-22T14:17:00Z",
                    "end_date": null,
                    "info_url": "https://starlink.com",
                    "wiki_url": "https://en.wikipedia.org/wiki/Starlink",
                    "mission_patches": [
                        {
                            "id": 7,
                            "name": "Space X Starlink Mission Patch",
                            "priority": 10,
                            "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/mission_patch_images/space2520x252_mission_patch_20221011205756.png",
                            "agency": {
                                "id": 121,
                                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                                "name": "SpaceX",
                                "type": "Commercial"
                            }
                        }
                    ],
                    "type": {
                        "id": 3,
                        "name": "Communication Constellation"
                    }
                }
            ],
            "orbital_launch_attempt_count": 6649,
            "location_launch_attempt_count": 946,
            "pad_launch_attempt_count": 1,
            "agency_launch_attempt_count": 349,
            "orbital_launch_attempt_count_year": 71,
            "location_launch_attempt_count_year": 19,
            "pad_launch_attempt_count_year": 1,
            "agency_launch_attempt_count_year": 38,
            "type": "normal"
        },
        {
            "id": "974b4774-cda7-4373-abfc-40c1a1859cba",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/974b4774-cda7-4373-abfc-40c1a1859cba/",
            "slug": "falcon-9-block-5-2-x-galileo",
            "name": "Falcon 9 Block 5 | 2 x Galileo",
            "status": {
                "id": 2,
                "name": "To Be Determined",
                "abbrev": "TBD",
                "description": "Current date is a placeholder or rough estimation based on unreliable or interpreted sources."
            },
            "last_updated": "2024-01-21T10:14:08Z",
            "net": "2024-04-22T00:00:00Z",
            "window_end": "2024-04-22T00:00:00Z",
            "window_start": "2024-04-22T00:00:00Z",
            "net_precision": {
                "id": 5,
                "name": "Day",
                "abbrev": "DAY",
                "description": "The T-0 is expected on the given day."
            },
            "probability": null,
            "weather_concerns": null,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
                "id": 121,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
                "name": "SpaceX",
                "type": "Commercial"
            },
            "rocket": {
                "id": 176,
                "configuration": {
                    "id": 164,
                    "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/164/",
                    "name": "Falcon 9",
                    "family": "Falcon",
                    "full_name": "Falcon 9 Block 5",
                    "variant": "Block 5"
                }
            },
            "mission": {
                "id": 5916,
                "name": "2 x Galileo",
                "description": "Payload consists of two satellites for Europe's Galileo navigation system.",
                "launch_designator": null,
                "type": "Navigation",
                "orbit": {
                    "id": 12,
                    "name": "Medium Earth Orbit",
                    "abbrev": "MEO"
                },
                "agencies": [],
                "info_urls": [],
                "vid_urls": []
            },
            "pad": {
                "id": 72,
                "url": "https://lldev.thespacedevs.com/2.2.0/pad/72/",
                "agency_id": null,
                "name": "Unknown Pad",
                "description": null,
                "info_url": null,
                "wiki_url": "",
                "map_url": "https://www.google.com/maps?q=28.458,-80.528",
                "latitude": "28.458",
                "longitude": "-80.528",
                "location": {
                    "id": 12,
                    "url": "https://lldev.thespacedevs.com/2.2.0/location/12/",
                    "name": "Cape Canaveral, FL, USA",
                    "country_code": "USA",
                    "description": null,
                    "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
                    "timezone_name": "America/New_York",
                    "total_launch_count": 943,
                    "total_landing_count": 50
                },
                "country_code": "USA",
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_72_20200803143403.jpg",
                "total_launch_count": 0,
                "orbital_launch_attempt_count": 0
            },
            "webcast_live": false,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/falcon_9_image_20230807133459.jpeg",
            "infographic": null,
            "program": [
                {
                    "id": 30,
                    "url": "https://lldev.thespacedevs.com/2.2.0/program/30/",
                    "name": "Galileo",
                    "description": "Galileo is a global navigation satellite system (GNSS) that went live in 2016, created by the European Union through the European Space Agency (ESA), operated by the European Union Agency for the Space Programme (EUSPA).",
                    "agencies": [
                        {
                            "id": 27,
                            "url": "https://lldev.thespacedevs.com/2.2.0/agencies/27/",
                            "name": "European Space Agency",
                            "type": "Multinational"
                        }
                    ],
                    "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/galileo_program_20231230110547.png",
                    "start_date": "2011-10-21T10:30:00Z",
                    "end_date": null,
                    "info_url": "https://www.gsc-europa.eu/",
                    "wiki_url": "https://en.wikipedia.org/wiki/Galileo_(satellite_navigation)",
                    "mission_patches": [],
                    "type": {
                        "id": 4,
                        "name": "Navigation Constellation"
                    }
                }
            ],
            "orbital_launch_attempt_count": 6650,
            "location_launch_attempt_count": 947,
            "pad_launch_attempt_count": 2,
            "agency_launch_attempt_count": 350,
            "orbital_launch_attempt_count_year": 72,
            "location_launch_attempt_count_year": 20,
            "pad_launch_attempt_count_year": 2,
            "agency_launch_attempt_count_year": 39,
            "type": "normal"
        },
        {
            "id": "607135c8-8090-4f5e-8bd3-d69bef2f2618",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/607135c8-8090-4f5e-8bd3-d69bef2f2618/",
            "slug": "electron-beginning-of-the-swarm-acs3-neonsat-1",
            "name": "Electron | Beginning Of The Swarm (ACS3 & NeonSat-1)",
            "status": {
                "id": 1,
                "name": "Go for Launch",
                "abbrev": "Go",
                "description": "Current T-0 confirmed by official or reliable sources."
            },
            "last_updated": "2024-04-04T07:41:23Z",
            "net": "2024-04-23T21:30:00Z",
            "window_end": "2024-04-23T22:45:00Z",
            "window_start": "2024-04-23T21:30:00Z",
            "net_precision": {
                "id": 1,
                "name": "Minute",
                "abbrev": "MIN",
                "description": "The T-0 is accurate to the minute."
            },
            "probability": null,
            "weather_concerns": null,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
                "id": 147,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/147/",
                "name": "Rocket Lab",
                "type": "Commercial"
            },
            "rocket": {
                "id": 7472,
                "configuration": {
                    "id": 26,
                    "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/26/",
                    "name": "Electron",
                    "family": "Electron",
                    "full_name": "Electron",
                    "variant": ""
                }
            },
            "mission": {
                "id": 5873,
                "name": "Beginning Of The Swarm (ACS3 & NeonSat-1)",
                "description": "NASA's Advanced Composite Solar Sail System (ACS3) is a technology demonstration mission tasked with deploying a composite boom solar sail.\r\n\r\nNeonSat-1 is a high-resolution optical satellite by South Korea's KAIST that will be deployed as a technology demonstration for a planned future Earth observation constellation.",
                "launch_designator": null,
                "type": "Dedicated Rideshare",
                "orbit": {
                    "id": 17,
                    "name": "Sun-Synchronous Orbit",
                    "abbrev": "SSO"
                },
                "agencies": [],
                "info_urls": [],
                "vid_urls": []
            },
            "pad": {
                "id": 185,
                "url": "https://lldev.thespacedevs.com/2.2.0/pad/185/",
                "agency_id": 147,
                "name": "Rocket Lab Launch Complex 1B",
                "description": null,
                "info_url": null,
                "wiki_url": "https://en.wikipedia.org/wiki/Rocket_Lab_Launch_Complex_1",
                "map_url": "https://www.google.com/maps?q=-39.262833,177.864469",
                "latitude": "-39.262833",
                "longitude": "177.864469",
                "location": {
                    "id": 10,
                    "url": "https://lldev.thespacedevs.com/2.2.0/location/10/",
                    "name": "Onenui Station, Mahia Peninsula, New Zealand",
                    "country_code": "NZL",
                    "description": null,
                    "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_10_20200803142509.jpg",
                    "timezone_name": "Pacific/Auckland",
                    "total_launch_count": 42,
                    "total_landing_count": 17
                },
                "country_code": "NZL",
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_185_20200803143540.jpg",
                "total_launch_count": 16,
                "orbital_launch_attempt_count": 16
            },
            "webcast_live": false,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/electron_image_20190705175640.jpeg",
            "infographic": null,
            "program": [],
            "orbital_launch_attempt_count": 6650,
            "location_launch_attempt_count": 43,
            "pad_launch_attempt_count": 17,
            "agency_launch_attempt_count": 47,
            "orbital_launch_attempt_count_year": 72,
            "location_launch_attempt_count_year": 4,
            "pad_launch_attempt_count_year": 4,
            "agency_launch_attempt_count_year": 5,
            "type": "normal"
        },
        {
            "id": "12978b64-816d-4ab1-b15f-44f237a0c083",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/12978b64-816d-4ab1-b15f-44f237a0c083/",
            "slug": "long-march-2fg-shenzhou-18",
            "name": "Long March 2F/G | Shenzhou 18",
            "status": {
                "id": 2,
                "name": "To Be Determined",
                "abbrev": "TBD",
                "description": "Current date is a placeholder or rough estimation based on unreliable or interpreted sources."
            },
            "last_updated": "2024-03-15T08:13:16Z",
            "net": "2024-04-25T00:00:00Z",
            "window_end": "2024-04-25T00:00:00Z",
            "window_start": "2024-04-25T00:00:00Z",
            "net_precision": {
                "id": 5,
                "name": "Day",
                "abbrev": "DAY",
                "description": "The T-0 is expected on the given day."
            },
            "probability": null,
            "weather_concerns": null,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
                "id": 88,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/88/",
                "name": "China Aerospace Science and Technology Corporation",
                "type": "Government"
            },
            "rocket": {
                "id": 8101,
                "configuration": {
                    "id": 84,
                    "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/84/",
                    "name": "Long March 2",
                    "family": "Long March 2",
                    "full_name": "Long March 2F/G",
                    "variant": "F/G"
                }
            },
            "mission": {
                "id": 6659,
                "name": "Shenzhou 18",
                "description": "Seventh crewed flight to the Chinese space station.",
                "launch_designator": null,
                "type": "Human Exploration",
                "orbit": {
                    "id": 8,
                    "name": "Low Earth Orbit",
                    "abbrev": "LEO"
                },
                "agencies": [
                    {
                        "id": 17,
                        "url": "https://lldev.thespacedevs.com/2.2.0/agencies/17/",
                        "name": "China National Space Administration",
                        "featured": true,
                        "type": "Government",
                        "country_code": "CHN",
                        "abbrev": "CNSA",
                        "description": "The China National Space Administration (CNSA) is the national space agency of the People's Republic of China. It is responsible for the national space program and for planning and development of space activities. CNSA and China Aerospace Corporation (CASC) assumed the authority over space development efforts previously held by the Ministry of Aerospace Industry. The CNSA has many launch sites around China with their orbital sites located in Jiuquan, Xichang, Taiyuan and Wenchang.",
                        "administrator": "Administrator: Tang Dengjie",
                        "founding_year": "1993",
                        "launchers": "",
                        "spacecraft": "Shenzhou",
                        "launch_library_url": null,
                        "total_launch_count": 0,
                        "consecutive_successful_launches": 0,
                        "successful_launches": 0,
                        "failed_launches": 0,
                        "pending_launches": 0,
                        "consecutive_successful_landings": 0,
                        "successful_landings": 0,
                        "failed_landings": 0,
                        "attempted_landings": 0,
                        "info_url": "http://www.cnsa.gov.cn/",
                        "wiki_url": "http://en.wikipedia.org/wiki/China_National_Space_Administration",
                        "logo_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/china2520national2520space2520administration_logo_20190207032431.png",
                        "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/china2520national2520space2520administration_image_20190207032431.jpeg",
                        "nation_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/china2520national2520space2520administration_nation_20190602114400.png"
                    }
                ],
                "info_urls": [],
                "vid_urls": []
            },
            "pad": {
                "id": 37,
                "url": "https://lldev.thespacedevs.com/2.2.0/pad/37/",
                "agency_id": null,
                "name": "Launch Area 4 (SLS-1 / 921)",
                "description": null,
                "info_url": null,
                "wiki_url": "https://en.wikipedia.org/wiki/Jiuquan_Launch_Area_4",
                "map_url": "https://www.google.com/maps?q=40.957893,100.290944",
                "latitude": "40.957893",
                "longitude": "100.290944",
                "location": {
                    "id": 17,
                    "url": "https://lldev.thespacedevs.com/2.2.0/location/17/",
                    "name": "Jiuquan Satellite Launch Center, People's Republic of China",
                    "country_code": "CHN",
                    "description": null,
                    "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_17_20200803142429.jpg",
                    "timezone_name": "Asia/Shanghai",
                    "total_launch_count": 222,
                    "total_landing_count": 0
                },
                "country_code": "CHN",
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_37_20200803143603.jpg",
                "total_launch_count": 22,
                "orbital_launch_attempt_count": 22
            },
            "webcast_live": false,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/long_march_2_image_20210908195835.jpeg",
            "infographic": null,
            "program": [
                {
                    "id": 7,
                    "url": "https://lldev.thespacedevs.com/2.2.0/program/7/",
                    "name": "Shenzhou",
                    "description": "The Shenzhou program is a crewed spaceflight initiative by China. The program put the first Chinese citizen, Yang Liwei, into orbit on 15 October 2003.",
                    "agencies": [
                        {
                            "id": 17,
                            "url": "https://lldev.thespacedevs.com/2.2.0/agencies/17/",
                            "name": "China National Space Administration",
                            "type": "Government"
                        }
                    ],
                    "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/shenzhou_program_20200820204745.PNG",
                    "start_date": "1993-01-01T00:00:00Z",
                    "end_date": null,
                    "info_url": null,
                    "wiki_url": "https://en.wikipedia.org/wiki/Shenzhou_program",
                    "mission_patches": [],
                    "type": {
                        "id": 2,
                        "name": "Human Spaceflight"
                    }
                },
                {
                    "id": 19,
                    "url": "https://lldev.thespacedevs.com/2.2.0/program/19/",
                    "name": "Tiangong space station",
                    "description": "The Tiangong space station is a space station placed in Low Earth orbit between 340 and 450 km above the surface.",
                    "agencies": [
                        {
                            "id": 88,
                            "url": "https://lldev.thespacedevs.com/2.2.0/agencies/88/",
                            "name": "China Aerospace Science and Technology Corporation",
                            "type": "Government"
                        }
                    ],
                    "image_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/chinese2520spa_program_20210608105528.png",
                    "start_date": "2021-04-29T03:23:00Z",
                    "end_date": null,
                    "info_url": null,
                    "wiki_url": "https://en.wikipedia.org/wiki/Tiangong_space_station",
                    "mission_patches": [],
                    "type": {
                        "id": 2,
                        "name": "Human Spaceflight"
                    }
                }
            ],
            "orbital_launch_attempt_count": 6651,
            "location_launch_attempt_count": 223,
            "pad_launch_attempt_count": 23,
            "agency_launch_attempt_count": 466,
            "orbital_launch_attempt_count_year": 73,
            "location_launch_attempt_count_year": 5,
            "pad_launch_attempt_count_year": 1,
            "agency_launch_attempt_count_year": 12,
            "type": "normal"
        },
        {
            "id": "848b8e10-e5a4-4e46-9896-0c2299360588",
            "url": "https://lldev.thespacedevs.com/2.2.0/launch/848b8e10-e5a4-4e46-9896-0c2299360588/",
            "slug": "electron-capella-acadia-3",
            "name": "Electron | Capella Acadia 3",
            "status": {
                "id": 2,
                "name": "To Be Determined",
                "abbrev": "TBD",
                "description": "Current date is a placeholder or rough estimation based on unreliable or interpreted sources."
            },
            "last_updated": "2024-03-10T09:39:42Z",
            "net": "2024-04-30T00:00:00Z",
            "window_end": "2024-04-30T00:00:00Z",
            "window_start": "2024-04-30T00:00:00Z",
            "net_precision": {
                "id": 7,
                "name": "Month",
                "abbrev": "M",
                "description": "The T-0 is expected in the given month."
            },
            "probability": null,
            "weather_concerns": null,
            "holdreason": "",
            "failreason": "",
            "hashtag": null,
            "launch_service_provider": {
                "id": 147,
                "url": "https://lldev.thespacedevs.com/2.2.0/agencies/147/",
                "name": "Rocket Lab",
                "type": "Commercial"
            },
            "rocket": {
                "id": 7797,
                "configuration": {
                    "id": 26,
                    "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/26/",
                    "name": "Electron",
                    "family": "Electron",
                    "full_name": "Electron",
                    "variant": ""
                }
            },
            "mission": {
                "id": 6315,
                "name": "Capella Acadia 3",
                "description": "Payload consists of a single SAR Earth-imaging Acadia satellite, a new generation satellite designed, manufactured, and operated by Capella Space.",
                "launch_designator": null,
                "type": "Earth Science",
                "orbit": {
                    "id": 8,
                    "name": "Low Earth Orbit",
                    "abbrev": "LEO"
                },
                "agencies": [
                    {
                        "id": 1059,
                        "url": "https://lldev.thespacedevs.com/2.2.0/agencies/1059/",
                        "name": "Capella Space",
                        "featured": false,
                        "type": null,
                        "country_code": "USA",
                        "abbrev": "",
                        "description": "Capella Space is an American space company. It is developing space-based radar Earth observation satellites equipped with synthetic-aperture radar that can penetrate clouds and work at night.",
                        "administrator": "CEO: Payam Banazadeh",
                        "founding_year": "2016",
                        "launchers": "",
                        "spacecraft": "",
                        "launch_library_url": null,
                        "total_launch_count": 0,
                        "consecutive_successful_launches": 0,
                        "successful_launches": 0,
                        "failed_launches": 0,
                        "pending_launches": 0,
                        "consecutive_successful_landings": 0,
                        "successful_landings": 0,
                        "failed_landings": 0,
                        "attempted_landings": 0,
                        "info_url": "http://capellaspace.com/",
                        "wiki_url": "https://en.wikipedia.org/wiki/Capella_Space",
                        "logo_url": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/capella2520space_logo_20230806180121.png",
                        "image_url": null,
                        "nation_url": null
                    }
                ],
                "info_urls": [],
                "vid_urls": []
            },
            "pad": {
                "id": 79,
                "url": "https://lldev.thespacedevs.com/2.2.0/pad/79/",
                "agency_id": 147,
                "name": "Rocket Lab Launch Complex 2 (Launch Area 0 C)",
                "description": null,
                "info_url": null,
                "wiki_url": null,
                "map_url": "https://www.google.com/maps?q=37.834,-75.488",
                "latitude": "37.834",
                "longitude": "-75.488",
                "location": {
                    "id": 21,
                    "url": "https://lldev.thespacedevs.com/2.2.0/location/21/",
                    "name": "Wallops Island, Virginia, USA",
                    "country_code": "USA",
                    "description": null,
                    "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_21_20200803142423.jpg",
                    "timezone_name": "America/New_York",
                    "total_launch_count": 78,
                    "total_landing_count": 0
                },
                "country_code": "USA",
                "map_image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_79_20200803143607.jpg",
                "total_launch_count": 4,
                "orbital_launch_attempt_count": 3
            },
            "webcast_live": false,
            "image": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/images/electron_image_20190705175640.jpeg",
            "infographic": null,
            "program": [],
            "orbital_launch_attempt_count": 6674,
            "location_launch_attempt_count": 79,
            "pad_launch_attempt_count": 5,
            "agency_launch_attempt_count": 48,
            "orbital_launch_attempt_count_year": 96,
            "location_launch_attempt_count_year": 2,
            "pad_launch_attempt_count_year": 2,
            "agency_launch_attempt_count_year": 6,
            "type": "normal"
        }
    ]
}