import React, { useState } from "react";
import { Helmet } from "react-helmet";
import GoogleMapReact from "google-map-react";

import BaseLayout from "components/layout/BaseLayout";
import { NavButtonContainer } from "components/nav/NavButtonContainer";
import { NavButton } from "components/nav/NavButton";
import MapContainer from "components/map/MapContainer";
import CurrentMarker from "components/map/CurrentMarker";
import { Marker } from "components/map/Marker";
import { MapSearch } from "components/search/MapSearch";

import Add from "../assets/svg/icons/add.svg";
import Location from "../assets/svg/icons/current-location.svg";

export default () => {
  const [zoom, setZoom] = useState(14);
  const draggable = true;

  const createMapOptions = (maps: Maps): MapOptions => {
    return {
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT,
      },
      mapTypeControl: false,
      zoomControl: false,
      scaleControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#fafafa",
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#c8c8c8",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#fafafa",
            },
          ],
        },
        {
          featureType: "landscape.man_made",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#fafafa",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#c8c8c8",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#c8c8c8",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#c8c8c8",
            },
          ],
        },

        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#c8c8c8",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#fafafa",
            },
          ],
        },

        {
          featureType: "road.local",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#f0f0f0",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#c8c8c8",
            },
          ],
        },

        {
          featureType: "administrative.land_parcel",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#c8c8c8",
            },
          ],
        },
        {
          featureType: "administrative.neighborhood",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
      ],
    };
  };
  return (
    <BaseLayout>
      <Helmet title="Home" />
      <MapContainer>
        <MapSearch />
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_API_KEY }}
          defaultCenter={{
            lat: 35.6580382,
            lng: 139.6994418,
          }}
          defaultZoom={zoom}
          draggable={draggable}
          options={createMapOptions}
        >
          <CurrentMarker lat={35.6580382} lng={139.6994418} />
          <Marker lat={35.6702328} lng={139.7005036}>
            〒153-0042 東京都目黒区青葉台２丁目１０−２８
          </Marker>
          <Marker lat={35.6627294} lng={139.7290225} />
          <Marker lat={35.6652554} lng={139.7098981} />
        </GoogleMapReact>
        <NavButtonContainer>
          <NavButton icon={<Location />} />
          <NavButton primary icon={<Add />} />
        </NavButtonContainer>
      </MapContainer>
    </BaseLayout>
  );
};
