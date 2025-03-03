var inc = new GlideRecord("incident");
inc.addActiveQuery();
inc.orderByDesc('sys_updated_on');
inc.setLimit(10);
inc.query();
while (inc.next()) {
	inc.short_description="Test "+inc.short_description;
	inc.update();
	gs.print(inc.short_description);

   
}

// *** Script: Test Employee payroll application server is down.
// *** Script: Test Network storage unavailable
//*** Script: Test Issue with email