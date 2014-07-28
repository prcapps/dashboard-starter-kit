var client = new Keen({
  projectId: "53d03d1080a7bd71bc000005",
  readKey: "75667b2b3f2f0ff12e78953ab95b7840e067c0a2cc68861d24335ed22f94f052904541a5a0cdc05e1dd525af60e1491a3ce0050adb52cb05468a5c63e3d55cc7e066127188b15363fc5a33a3c82c81fbcbb8235d281b2ff298a3cb2c44e563b062b6a82d9b546bfa5e8e1c8282171755"
});

Keen.ready(function(){


  // ----------------------------------------
  // Pageviews Area Chart
  // ----------------------------------------
  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "freshdesk_tickets",
    interval: "hourly",
    groupBy: "freshdesk_webhook.ticket_agent_name",
    timeframe: "this_week",
  });

  client.draw(pageviews_timeline, document.getElementById("chart-01"), {
    chartType: "areachart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });

  // ----------------------------------------
  // Pageviews Area Chart
  // ----------------------------------------
  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "freshdesk_tickets",
    interval: "hourly",
    targetProperty: "id",
    groupBy: ["freshdesk_webhook.ticket_status"],
    timeframe: "today",
  });

  client.draw(pageviews_timeline, document.getElementById("chart-04"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });


  // ----------------------------------------
  // Pageviews Pie Chart
  // ----------------------------------------
  var pageviews_static = new Keen.Query("count", {
   eventCollection: "harvest_events",
    timeframe: "today",
    targetProperty: "id",
    groupBy: "user_id"
  });
  client.draw(pageviews_static, document.getElementById("chart-02"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      }
    }
  });


  // ----------------------------------------
  // Impressions timeline
  // ----------------------------------------
  var pageviews_static = new Keen.Query("count", {
   eventCollection: "freshdesk_tickets",
    timeframe: "today",
    targetProperty: "id",
    groupBy: "freshdesk_webhook.ticket_status"
  });
  client.draw(pageviews_static, document.getElementById("chart-03"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
      }
    }
  });

  // var impressions_timeline = new Keen.Query("count", {
  //   eventCollection: "impressions",
  //   groupBy: "ad.advertiser",
  //   interval: "hourly",
  //   timeframe: {
  //     start: "2014-05-04T00:00:00.000Z",
  //     end: "2014-05-05T00:00:00.000Z"
  //   }
  // });
  // client.draw(impressions_timeline, document.getElementById("chart-03"), {
  //   chartType: "columnchart",
  //   title: false,
  //   height: 250,
  //   width: "auto",
  //   chartOptions: {
  //     chartArea: {
  //       height: "75%",
  //       left: "10%",
  //       top: "5%",
  //       width: "60%"
  //     },
  //     bar: {
  //       groupWidth: "85%"
  //     },
  //     isStacked: true
  //   }
  // });


  // ----------------------------------------
  // Impressions timeline (device)
  // ----------------------------------------
  // var impressions_timeline_by_device = new Keen.Query("count", {
  //   eventCollection: "impressions",
  //   groupBy: "user.device_info.device.family",
  //   interval: "hourly",
  //   timeframe: {
  //     start: "2014-05-04T00:00:00.000Z",
  //     end: "2014-05-05T00:00:00.000Z"
  //   }
  // });
  // client.draw(impressions_timeline_by_device, document.getElementById("chart-04"), {
  //   chartType: "columnchart",
  //   title: false,
  //   height: 250,
  //   width: "auto",
  //   chartOptions: {
  //     chartArea: {
  //       height: "75%",
  //       left: "10%",
  //       top: "5%",
  //       width: "60%"
  //     },
  //     bar: {
  //       groupWidth: "85%"
  //     },
  //     isStacked: true
  //   }
  // });


  // ----------------------------------------
  // Impressions timeline (country)
  // ----------------------------------------
  // var impressions_timeline_by_country = new Keen.Query("count", {
  //   eventCollection: "impressions",
  //   groupBy: "user.geo_info.country",
  //   interval: "hourly",
  //   timeframe: {
  //     start: "2014-05-04T00:00:00.000Z",
  //     end: "2014-05-05T00:00:00.000Z"
  //   }
  // });
  // client.draw(impressions_timeline_by_country, document.getElementById("chart-05"), {
  //   chartType: "columnchart",
  //   title: false,
  //   height: 250,
  //   width: "auto",
  //   chartOptions: {
  //     chartArea: {
  //       height: "75%",
  //       left: "10%",
  //       top: "5%",
  //       width: "60%"
  //     },
  //     bar: {
  //       groupWidth: "85%"
  //     },
  //     isStacked: true
  //   }
  // });


});
