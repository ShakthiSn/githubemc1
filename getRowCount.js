var inc = new GlideRecord("incident");
inc.query();
if (inc) {
    gs.print(inc.getRowCount());
}
//*** Script: 67
