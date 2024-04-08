export type Launch = {
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: [];
  },
  links: {
    patch: {
      small: string;
      large: string;
    },
    reddit: {
      campaign: string | null,
      launch: string | null,
      media: string | null,
      recovery: string | null
    },
    flickr: {
      small: [],
      original: []
    },
    presskit: null,
    webcast: string,
    youtube_id: string,
    article: string,
    wikipedia: string
  },
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: {
    time: number;
    altitude: null | number;
    reason: string;
  }[],
  details: string;
  crew: [],
  ships: [],
  capsules: [],
  payloads: string[],
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: [],
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: null | string;
  id: string;
}