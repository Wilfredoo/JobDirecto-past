// this goes in jobs, above the other button
<Link to="/loginorregister"><input id="createJob" type="submit" value="Busco gente"/></Link>
<div className="urgentJobs">
  {this.state.urgentJobData.data.map(data => {
    return (
      <div key={data.id}>
        <p>
          <span className="restName">{data.restname}</span>
        </p>
      </div>
    );
  })}
</div>
