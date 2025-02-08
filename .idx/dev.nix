{ pkgs, ... }: {

  # NOTE: This is an excerpt of a complete Nix configuration example.
  # For more information about the dev.nix file in IDX, see
  # https://developers.google.com/idx/guides/customize-idx-env

  # Enable previews and customize configuration
  idx.previews = {
    enable = true;
    previews = {
      # The following object sets web previews
      web = {
        command = [
          "npm"
          "run"
          "start"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
          "--disable-host-check"
        ];
        manager = "web";
        # Optionally, specify a directory that contains your web app
        # cwd = "app/client";
      };
      # The following object sets Android previews
      # Note that this is supported only on Flutter workspaces
      android = {
        manager = "flutter";
      };
    };
  };
}