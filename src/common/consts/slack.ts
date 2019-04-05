export default class SlackConsts {
  public static get slackAuthUrl(): string {
    return 'https://slack.com/api/oauth.access'
  }

  public static get mainChannelName(): string {
    return 'general'
  }
}
